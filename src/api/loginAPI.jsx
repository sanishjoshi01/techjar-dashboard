const requestLogin = (email, password) => {
  const users = [
    {
      email: "admin@gmail.com",
      password: "admin#123",
    },
    {
      email: "admin123@gmail.com",
      password: "admin#12",
    },
  ];

  return new Promise((resolve, reject) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (email === null || password === null) {
      reject({
        success: false,
        message: "Fields cannot be empty!",
      });
    } else {
      const validatedEmail = email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

      const validatedPassword = password.length >= 8;

      if (!validatedEmail) {
        reject({
          success: false,
          message: "Email does not seem to be correct!",
        });
      } else if (!validatedPassword) {
        reject({
          success: false,
          message: "Password must be greater than 8 characters",
        });
      } else {
        if (user) {
          resolve({
            success: true,
            message: "Login Successful",
            user: {
              email,
            },
          });
        } else {
          reject({
            success: false,
            message: "Invalid email or password",
          });
        }
      }
    }
  });
};

export { requestLogin };
