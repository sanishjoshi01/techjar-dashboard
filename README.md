# Make sure you have installed:

Node [Click here to install](https://nodejs.org/en/download/package-manager).

## STEPS FOR RUNNING LOCALLY:

### `1. Create a folder (anywhere)`

`your-folder-name`

Go inside the folder and open terminal

### `2. Clone repository`

`git clone https://github.com/sanishjoshi01/techjar-dashboard.git`

### `3. Installing Dependencies`

`cd techjar-dashboard`

`npm install`

### `4. Running Locally`

`npm run dev`

Click the Local link - `ctrl + left mouse click`

### `5. Login Details`

Email: `admin@gmail.com`

Password: `admin#123`

### `6. Create your own credentials (Optional)`

`Open your code in VS Code or any other code editors`

`Go inside src/api/loginAPI.jsx`

```
const users = [
    {
        email: "admin@gmail.com",
        password: "admin#123",
    },
    //add your own credentials here
    {
        email: "your-email-here",       //proper email format
        password: "your-password-here", //minimum 8 characters
    }
];
```

`Make sure you enter your credentials in correct email format and more than 8 character password`

### `7. Logout`

Logout by clicking the account icon which shows the logout button and email of the current user

### `8. Validations`

Play with the Sign in Form for email and password validation

    1. Users cannot enter empty fields
    2. Email must be a proper email format
    3. Password must be more than 8 characters
    4. Credentials must match with the predefined login credentials to login
