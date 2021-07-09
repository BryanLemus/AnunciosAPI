import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";
import User, { IUser } from "../models/user";
import { sendEmail } from "../libs/sendGrid";
("../libs/sendGrid");

function createToken(user: IUser) {
  jwt.sign(
    { userId: user.id, email: user.email, username: user.username },
    config.jwtSecret,
    { expiresIn: 36000 }
  );
}

export const register = async (
  res: Response,
  req: Request
): Promise<Response> => {
  // Get body objects
  const { email, username, password, confirmPassword } = req.body;

  // Validate passwords are same
  if (password !== confirmPassword)
    return res.status(400).json({ msg: "Passwords do not match" });

  // Validate email empty
  if (!email) {
    return res.status(400).json({ msg: "Please enter the email" });
  }

  // Validate username empty
  if (!username) {
    return res.status(400).json({ msg: "Please enter the username" });
  }

  // Validate email empty
  if (!password || !confirmPassword) {
    return res.status(400).json({ msg: "Please enter the password" });
  }

  // Validate email repeat
  let emailQuery = await User.findOne({ email: email });
  if (emailQuery)
    return res.status(400).json({ msg: "The email already exists" });

  // Validate username repeat
  let usernameQuery = await User.findOne({ email: username });
  if (usernameQuery)
    return res.status(400).json({ msg: "The username already exists" });

  // Set new user object
  let newUser = new User({ email: email, username: username });

  // Save new user in MongoDB
  await newUser.save().then(() => {
    // If user saved, send an email.
    sendEmail(
      newUser.email,
      "brian.lemus@outlook.com",
      "welcome",
      `Welcome ${newUser.username} to Airbnb`
    );
  });
  console.log("User created");
  return res.status(201).json(newUser);
};

export const login = async (res: Response, req: Request) => {
  if (!req.body.email || !req.body.username) {
    return res.status(400).json({ msg: "Please enter the email or username" });
  }

  const user =
    (await User.findOne({ email: req.body.email })) ||
    (await User.findOne({ email: req.body.username }));
  if (!user) {
    return res.status(400).json({ msg: "The User does not exists" });
  }

  let isMatch = await User.comparePassword(req.body.password);
  if (isMatch) {
    return res.status(200).json({ token: createToken(user) });
  }

  return res.status(400).json({
    msg: "The email, username or password are incorrect",
  });
};
