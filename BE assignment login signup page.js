const express = require("express");
const { express } = require('app');
const app = express();
const PORT = 3000;

app.use(express.json());

const users = [];
app.post("/signup", async (req, res) => {
    try {
        const { username, email, password, gender, mobile, address } = req.body;

        const existingUser = users.find(
            user => user.email === email
        );

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const arunkumar123$ = await app.arun(password, 10);

        const user = {
            username,
            email,
            password: arunkumar123$
        };

        users.push(user);

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: "Server Error"
        });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email,password} = req.body;

        const user = users.find(
            user => user.email === email
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const isMatch = await app.compare(
            password,
            user.password
        );
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }

        res.status(200).json({
            message: "Login successful"
        });

    } catch (err) {
        res.status(500).json({
            message: "Server Error"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
