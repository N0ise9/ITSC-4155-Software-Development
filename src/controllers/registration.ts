import { Request, Response } from "express";


const User = require('../views/registration');



export const registration= (req:Request, res:Response )=>{
        return res.render('../views/registration');
};




//process the login request
export const login = (req:Request, res:Response , next)=>{
    //authentication user login request
    let email = req.body.email;
    let password = req.body.password;
   

    //get ther user that matches the email
    User.findOne({email: email})
    .then(user=>{
        if(user){
            //user found in the database
            user.comparePassword(password)
            .then(result=>{
                if(result){
                    req.session.user = user._id; //store users 
                    req.flash('success', 'You have successfully logged in');
                    res.redirect('/views/profile');
                    
                }else{
                    //console.log('wrong password')
                    req.flash('error','wrong password!');
                    res.redirect('/users/login');
                   
                }
            })

        }else{
            //console.log('wrong email address');
            req.flash('error','wrong email address');
            res.redirect('/views/signin');
        }
    })
    .catch(err=>next(err));
};



export const getUserLogin = (req:Request, res:Response , next) => {
        return res.render('./views/signin');
};

//create a new user
export const create = (req:Request, res:Response , next)=>{
    let user = new User(req.body);
    user.save()
    .then(()=>res.redirect('/views/signin'))
    .catch(err=>{
        if(err.name === 'ValidationError'){
            req.flash('error',err.message);
            return res.redirect('/views/registration');
        }
        if(err.code === 11000){
            req.flash('error','email adress has been use');
            return res.redirect('/views/registration');
        }
        next(err);
    });
};

//get user profile
export const profile = (req:Request, res:Response , next)=>{
    let id = req.session.user;
    console.log(req.flash());
    User.findById(id)
    .then(user=>res.render('./views/profile',{user}))
    .catch(err=>next(err));
    
};


export const logout = (req, res, next)=>{
    req.session.destroy(err=>{
        if(err) 
           return next(err);
       else
            res.redirect('/');  
    });
   
 };