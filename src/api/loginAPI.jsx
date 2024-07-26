const requestLogin = (email, password) => {
  const users = [
    {
      email: "admin@gmail.com",
      password: "admin#123",
    },
  ];

  return new Promise((resolve, reject) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
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
  });
};

export { requestLogin };
