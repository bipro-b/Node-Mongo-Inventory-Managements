const User = require("../models/User");

exports.signupService = async (userInfo) => {
  const user = await User.create(userInfo);
  return user;
};

exports.getuserService = async (email) => {
  const getUser = await User.findOne({ email });
  return getUser;
};
