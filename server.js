require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT=process.env.PORT || 5000


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
    res.render('login');  // login.ejs
});
app.get('/signup', (req, res) => {
    res.render('signup');  // signup.ejs
});

app.post('/login', (req,res) => {
    const {username, password}=req.body
    res.send(`Login Succesfully!! Username:${username}`)
})
app.post('/signUp', (req,res) => {
    const {username,email,password,confirmpassword}=req.body
    res.send(`SignUp Succesfully!! Username:${username}`)
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
