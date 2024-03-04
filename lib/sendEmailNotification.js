const nodemailer = require("nodemailer");

async function sendEmailNotification(gasPrice, emailDetails) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: emailDetails.senderEmail,
                pass: emailDetails.senderPassword,
            },
        });

        const mailOptions = {
            from: emailDetails.senderEmail,
            to: emailDetails.recipientEmail,
            subject: "Gas Price Update",
            text: `Current gas price: ${gasPrice} wei`,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log("Email notification sent successfully.");
    } catch (error) {
        console.error("Error sending email notification:", error);
        throw error;
    }
}

module.exports = { sendEmailNotification };
