var jwt = require('jsonwebtoken');
require("dotenv").config();
const  {REACT_APP_JWT_TOKEN} = process.env


const fetchuser = (req, res, next) => {
    console.log(`${REACT_APP_JWT_TOKEN}`);
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token,`${REACT_APP_JWT_TOKEN}`);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchuser;