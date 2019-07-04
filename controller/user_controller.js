var express = require('express'); // Biblioteca usada para fazer get/post
var UserService = require('../service/user_service');

const app = express.Router();

app.post('/signup', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let user = {
        username: username,
        password: password,
    };

    UserService.signup(user,  (err, user) => {
        if (err) return res.json({ success: false, error: err });

        res.json({ success: true, user: user });
    });
});

app.get('/login', (req, res) => {
    let username = req.query.username;
    let password = req.query.password;

    UserService.login(username, password, (err, user) => {
        if (err) return res.json({ success: false, error: err });

        if (user) {
            let token = UserService.generateToken(user);
            res.json({ success: true, token: token, user: user});
        } else {
            res.json({ success: false, error: "Acesso negado!" });
        }
    });
});

app.post('/logout', (req, res) => {
    const token = req.header("Auth");
    if (token) {
        const user = UserService.getUserFromToken(token);
        UserService.logout(user);
    }

    res.json({ success: true })
});


module.exports = app;
