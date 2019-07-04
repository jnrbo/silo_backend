const crypto = require('crypto');
const User = require('../model/user');

let loggedUsers = [];

class UserService {

    static logged() {
        return loggedUsers
    }

    static signup(user, callback) {
        const encryptedPassword = crypto.createHash('sha1').update(user.password).digest('hex');
        new User({
            username: user.username,
            password: encryptedPassword
        }).save(callback);
    }

    static login(username, password, callback) {
        const encryptedPassword = crypto.createHash('sha1').update(password).digest('hex');

        User.where({username: username, password: encryptedPassword}).findOne(callback);
    }

    static logout(user) {
        for (let i = 0; i < loggedUsers.length; i++) {
            if (loggedUsers[i].username === user.username) {
                loggedUsers.splice(i, 1);
            }
        }
    }

    static generateToken(user) {
        let date = (new Date()).valueOf().toString();

        let token = crypto.createHash('sha256').update(date + "_enklima").digest('hex');

        UserService.logout(user); // remove old user before new login

        loggedUsers.push({
            user: user,
            username: user.username,
            token: token
        });

        return token;
    }

    static getUserFromToken(token) {
        for (let i = 0; i < loggedUsers.length; i++) {
            if (loggedUsers[i].token === token) {
                return loggedUsers[i].user;
            }
        }
        return null;
    }
}

module.exports = UserService;
