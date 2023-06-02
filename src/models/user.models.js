const Users = require("./users.mongo");

const createNewUser = async (user) => {
  await Users.create(user);
};

const userSignIn = async (user) => {
  const userDetails = await Users.findOne({ email: user.email });
  if (!userDetails) {
    throw new Error("User not found");
  }
  if (userDetails && userDetails.password === user.password) {
    userDetails.loginStatus = true;
    userDetails.save();
    return userDetails;
  }
};

module.exports = { createNewUser, userSignIn };
