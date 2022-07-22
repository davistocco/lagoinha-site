import React, { useEffect, useState } from 'react'

export default function Form({ children, setForm, form, ...props }) {
    const validateForm = (form) => {
        return Object.values(form.rules).some(i => i.hasError == true);
    }

    const handleFormInput = (name, value) => {
        const hasError = validateInput(name, value);

        setForm((form) => ({
            values: {
                ...form.values,
                [name]: value
            },
            rules: {
                ...form.rules,
                [name]: {
                    ...form.rules[name],
                    hasError: hasError
                }
            },
        }));

        setForm((form) => {
            const formIsValid = !validateForm(form);
            return {
                ...form,
                isValid: formIsValid
            }
        });
    }

    const validateInput = (name, value) => {
        const input = children.find(i => i.props.name == name);
        const rules = input.props?.rules;

        if (!rules) {
            return false;
        }

        if (rules.required && !value) {
            return true;
        }

        return false;
    }

    useEffect(() => {
        const keys = Object.keys(form.rules);
        keys.forEach(key => {
            handleFormInput(key, '');
        })
    }, [])

    return (
        <form onInput={(e) => handleFormInput(e.target.name, e.target.value)} {...props}>
            {children}
        </form>
    )

}
