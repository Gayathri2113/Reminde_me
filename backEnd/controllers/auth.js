const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const temporaryData = [
    {
        name: "Kunal",
        email: "kunal@gmail.com",
        password: "12345"
    },
    {
        name: "Nikhil",
        email: "nikhi@gmail.com",
        password: "12345"
    },
    {
        name: "Harsh",
        email: "harsh@gmail.com",
        password: "12345"
    },
];

exports.signUp = (req, res) => {
    const { name, email, password } = req.body;
    const isValid = temporaryData.findIndex((ele) => (ele.email === email));

    if (isValid !== -1) {
        res.status(400).json({
            error: "User already exists"
        });
    }

    const token = jwt.sign(
        {
            email : email,
        },
        process.env.SECRET_KEY
    );

    bcrypt.hash(password, 10, (err, hash) => {
        if(err){
            res.status(500).json({
                error : "Internal Server Error",
            });
        }
        const user = {
            name,
            email,
            password:hash,
        };

        temporaryData.push(user);
        console.log(temporaryData);
        res.send(temporaryData);

        res.status(200).json({
            message :"User added successfully to database",
            token : token,
        });
    });
};

exports.signIn = (req, res) => {
    res.send("Hi");
};