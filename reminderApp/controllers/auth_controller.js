let database = require("../database");
const userModel = require("../models/userModel").userModel;

const getUserByEmailIdAndPassword = (email, password) => {
  let user = userModel.findOne(email);
  if (user) {
    if (isUserValid(user, password)) {
      return user;
    }
  }
  return null;
};
const getUserById = (id) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
  return null;
};

function isUserValid(user, password) {
  return user.password === password;
}

// let authController = {
//   login: (req, res) => {
//     res.render("auth/login");
//   },

//   register: (req, res) => {
//     res.render("auth/register");
//   },

//   loginSubmit: (req, res) => {
//     // implement

//   },

//   registerSubmit: (req, res) => {
//     // implement
//   },
// };

module.exports = {
  getUserByEmailIdAndPassword,
  getUserById,
};
