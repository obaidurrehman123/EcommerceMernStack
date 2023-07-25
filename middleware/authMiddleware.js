import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
const reqSignIn = async (req, res, next) => {
  try {
    const JWT_TOKEN = "Obaid";
    const decode = JWT.verify(req.headers.authorization, JWT_TOKEN);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Invalid Token",
    });
  }
};
const adminAccess = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Invalid Token",
    });
  }
};
export default { reqSignIn, adminAccess };
