import {nanoid} from '@reduxjs/toolkit';  

const users = [
    {
        email: 'admin@gmail.com',
        password: 'admin#123'
    }
];

export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.email === email && user.password === password);
        if(user){
            resolve({
                success: true, 
                message: 'Login Successful',
                token: nanoid(),
            });
        }
        else{
            reject({
                success: false, 
                message: 'Invalid email or password'
            });
        }
    })
}