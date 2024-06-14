const employeeUser = require("../modal/employee.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.employeesignUp = async (req, res) => {
  try {
    const emailCheck = await employeeUser.find({
      email: req.body.email,
    });
    if (emailCheck.length > 0) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exist" });
    }
    req.body.password = await bcrypt.hashSync(req.body.password);
    const user = await employeeUser.create(req.body);
    return res.status(200).json({
      success: true,
      data: user,
      message: "Employee Register Successfully",
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.employeesignIn = async (req, res) => {
  try {
    const { password } = req.body;
    const emailCheck = await employeeUser.findOne({
      email: req.body.email,
    });

    if (!emailCheck) {
      return res.status(400).json({
        success: false,
        message: 'Account not regsiter',
      });
    }

    if (!bcrypt.compareSync(password, emailCheck.password)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Password',
      });
    }

    const token = jwt.sign(
      {
        id: emailCheck._id,
      },
      process.env.JWTSECRET,
      {
        expiresIn: 86400,
      }
    );

    let result = {
      token: token,
      email: emailCheck.email,
      id:emailCheck._id,
      firstName:emailCheck.firstName,
      lastName:emailCheck.lastName,
      status:emailCheck.status
    };

    return res.status(200).json({
      success: true,
      data: result,
      message: 'Login successfully',
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


exports.employeeInfo = async (req, res) => {
  try {
    const userId = req.body.id; 

    const selectedFields = [
      'firstName',
      'lastName',
      'email',
      'createdAt',
      'address',
      'employeeVisibility',
      'phoneNumber',
      'status',
      'degree',
      'job'
    ];

    const result = await employeeUser.findById(userId).select(selectedFields);
    
    return res.status(200).json({
      success: true,
      data: result,
      message: "Employee data display Successfully",
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.employeeProfile = async (req, res) => {
  try {
    const user = await employeeUser.updateOne(
      { _id: req.body.id },
      { $set: req.body }
    );
    let result = {
      id:req.body.id,
      status:req.body.status
    };
    return res.status(200).json({
      success: true,
      data: result,
      message: "Employee Profile Updated Successfully",
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};