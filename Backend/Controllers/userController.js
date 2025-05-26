const mongoose = require("mongoose")
const contactMe = async (req, res) => {
    if (!req.body) {
        res.status(400).json({ message: "Something went wrong" });
    }
    const { name, email, phone, message } = req.body;
    const formData = {
        access_key: process.env.API_WEBFORMS_ACCESS_KEY,
        name,
        email,
        phone,
        message
    }
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers:
        {
            "content-type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    const data = await response.json();
    if (!data.success) {
        return res.status(400).json({ message: "Oops! Mail stuck. Try again later" })
    }
    return res.status(200).json("Mail sent successfully!");
}




module.exports = {  contactMe };