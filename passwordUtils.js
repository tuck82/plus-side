//passwordUtils.js

require('dotenv').config();

const argon2 = require('argon2');
const crypto = require('crypto');

const password = process.env.FORM_PASS;


<<<<<<< HEAD
// Generate a random salt
crypto.randomBytes(32, (err, salt) => {
    if (err) throw err;

=======

// Generate a random salt
crypto.randomBytes(32, (err, salt) => {
    if (err) throw err;

>>>>>>> parent of 2fc4531 (more pass attempts)
    argon2.hash(password, { salt })
        .then(hashedPassword => {
            console.log('Hashed Password:', hashedPassword);
        })
        .catch(error => {
            console.error('Error hashing password:', error);
        });
});