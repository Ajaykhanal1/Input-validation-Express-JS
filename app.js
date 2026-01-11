const express = require('express');
const {body,validationResult}= require('express-validator');

const app = express();
app.use(express.json());

app.post('/register',
    // Validation Rule
    body('username').isString().withMessage('Username must be string').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('age').isInt({min:13}).withMessage('Age must be 13 or above'),

    (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }
        res.json({
            message:"User registered successfully."
        });
    }
);

app.listen(3000);