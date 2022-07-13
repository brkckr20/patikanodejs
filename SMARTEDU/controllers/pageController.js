const nodemailer = require("nodemailer");


exports.getIndexPage = (req, res) => {
    console.log("userID ->", req.session.userID);
    res.status(200).render("index", {
        pageName: "index"
    });
}

exports.getAboutPage = (req, res) => {
    res.status(200).render("about", {
        pageName: "about"
    });
}

exports.getRegisterPage = (req, res) => {
    res.status(200).render("register", {
        pageName: "register"
    });
}

exports.getLoginPage = (req, res) => {
    res.status(200).render("login", {
        pageName: "login"
    });
}

exports.getContactPage = (req, res) => {
    res.status(200).render("contact", {
        pageName: "contact"
    });
}

exports.sendEmail = async (req, res) => {
    //process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    const outputMessage = `
    
    <h1>Mail Details</h1>

    <ul>
        <li>Name : ${req.body.name}</li>
        <li>Email : ${req.body.email}</li>
    </ul>

    <h1>Message</h1>
    <p>${req.body.message}</p>
    `

    //gönderici bilgileri
    let transporter = nodemailer.createTransport({ //gönderici 
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "burak@gmail.com", // gmail hesabı
            pass: "cloczzblemvidrvi", // gmail parola
        },
    });

    // send mail with defined transport object
    //alıcı bilgileri
    let info = await transporter.sendMail({
        from: '"Smart Edu Contact Form 👻" <burak2043@gmail.com>', // sender address
        to: "dd0641472@gmail.com", // list of receivers
        subject: "Smart Edu Contact Subject ✔", // Subject line
        html: outputMessage, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.status(200).redirect("contact");
}