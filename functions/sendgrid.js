const client = require('@sendgrid/mail');

const sendEmail = (client, message, senderEmail, senderName) => {
    return new Promise ((fulfill, reject) => {

        const data = {
            from: {
                email: senderEmail,
                name: senderName,
            },
            subject: 'Portfolio Mailer',
            to: 'charlie.wryte@gmail.com',
            html: `New form submission<br/> ${message}`
        }

        client
            .send(data)
            .then(([response, body]) => {
                fulfill(response)
            })
            .catch(e => reject(e)) 
    });
} 

exports.handler = function(event, context, callback) {
    const {
        SEND_GRID_API_KEY,
        SEND_GRID_EMAIL,
        SEND_GRID_SENDER_NAME
    } = process.env

    const body = JSON.parse(event.body)
    const message = body.message

    client.setApiKey(SEND_GRID_API_KEY);

    sendEmail(
        client,
        message,
        SEND_GRID_EMAIL,
        SEND_GRID_SENDER_NAME
    )
    .then(response => callback(null, { statusCode: response.statusCode }))
    .catch(e => callback(e, null));    
}