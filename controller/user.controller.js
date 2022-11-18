const { signupService, getuserService } = require("../services/user.service");
const { generateToken } = require("../utils/token");
const { bcrypt } = require("bcryptjs");
exports.signup = async (req, res, next) => {
  try {
    const user = await signupService(req.body);
    res.status(200).json({
      status: "Success",
      message: "Successfully signed up",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fails",
      message: "Fails to  signup",
      error: error.message,
    });
  }
};
/* 
1. Email and password checking
2. Load user from database wiwth email
3. If not user send res
4. commpare password
5. If password not corrent send res
6. If password then check is active or not 
7. If not active send res
8. generate token
9. send user and token
 */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        error: "Please provide credential",
      });
    }
    const user = await getuserService(email);
    if (!user) {
      return res.status(401).json({
        status: "Fails",
        error: "No user found. Please create and account.",
      });
    }

    const isPasswordValid = user.comparePassword(password, user.password);

    // const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "Failes",
        error: "Password is not valid",
      });
    }

    if (user.status != "active") {
      return res.status(401).json({
        status: "Fails",
        error: "Your Account is not active yet",
      });
    }

    // Token
    const token = generateToken(user);

    res.status(200).json({
      status: "Success",
      message: "Successfully logged in",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Fails",
      message: "Fails to  signup",
      error: error.message,
    });
  }
};
