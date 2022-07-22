import React, { useEffect, useState } from 'react';
import styles from './textarea.module.scss';

export default function Textarea({ label, name, rules, hasError, ...props }) {
    const inputRef = React.createRef();
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        inputRef.current.form.addEventListener('submit', () => {
            setSubmitted(true);
        });
    }, []);

    return (
        <div className={styles['form-item']}>
            <label htmlFor={name}>{label}</label>
            <textarea ref={inputRef} {...props} name={name} className={submitted && hasError && styles.error} />
            {submitted && hasError && <span className={styles['error-message']}>{ rules.required }</span>}
        </div>
    )
}
