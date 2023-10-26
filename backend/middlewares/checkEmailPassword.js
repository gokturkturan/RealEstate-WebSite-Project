import validator from "email-validator";

const isEmailValid = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  if (email && !validator.validate(email)) {
    return res.status(400).json({ error: "This email is not valid." });
  }

  next();
};

const isPasswordValid = (req, res, next) => {
  const { password, confirmPassword } = req.body;

  if (!password) {
    return res.status(400).json({ error: "Password is required." });
  }

  if (password && password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password should be at least 6 characters." });
  }

  if (confirmPassword && password && confirmPassword !== password) {
    return res.status(400).json({ error: "Passwords are not the same." });
  }

  next();
};

export { isEmailValid, isPasswordValid };
