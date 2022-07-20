import nodemailer from 'nodemailer'

const sendPrayRequest = async (req, res) => {
    const {
        name,
        email,
        phone,
        description
    } = req.body;

    const transporter = nodemailer.createTransport({
        service: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL_SENDER,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
        }
    })

    const message = `
    <div>
        <p>Nome: ${name}</p>
        <p>E-mail: ${email}<p>
        <p>Telefone: ${phone}</p>
        <p>Descrição do pedido: ${description}</p>
    </div>`

    const options = {
        from: 'Pedido de Oração <sender@sender.com>',
        to: process.env.EMAIL_TO,
        subject: `Pedido de Oração - ${name}`,
        html: message,
    }

    transporter.sendMail(options, (error, info) => {
        if (error) {
            console.error(error);
            res.status(400).send();
        } else {
            res.status(200).send();
        }

    })
}

export default sendPrayRequest;