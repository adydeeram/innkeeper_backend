const Users = require("./users.mongo");
const jwt = require("jsonwebtoken");


const createNewUser = async (user) => {
  await Users.create(user);
};
const userSignIn = async (user) => {
  const userDetails = await Users.findOne({ email: user.email });
  if (!userDetails) {
    // Handle the case when user details are not found
    return null;
  }

  let access_token;
  try {
    access_token = jwt.sign({ userId: userDetails.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
  } catch (error) {
    // Handle any errors that occur during token generation
    return null;
  }

  if (userDetails.password === user.password) {
    userDetails.loginStatus = true;
    await userDetails.save();
    return {userDetails, access_token};
  }

  return null; // Return null if the password doesn't match
};
module.exports = { createNewUser, userSignIn };
