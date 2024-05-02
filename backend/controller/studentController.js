const Student = require("../models/studentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../SendEmail");
const randomstring = require("randomstring");

const otpStorage = {};

//register POST: http://localhost:4000/api/v1/register
exports.register = async (req, res, next) => {
  try {
    const { name, password, phoneNumber, email, uucmsNo, stdYear } = req.body;

    const isPresEmail = await Student.findOne({ email: email });
    const isPresNumber = await Student.findOne({ phoneNumber: phoneNumber });

    if (isPresEmail || isPresNumber) {
      return res.status(400).json({
        success: false,
        message: "Email and phone number already exsist",
      });
    }

    // Generate OTP
    const otp = randomstring.generate({
      length: 4,
      charset: "numeric",
    });

    console.log(otp);
    // Save OTP temporarily
    otpStorage[email] = otp;

    const TokenOtp = `Your OTP for email verification is: ${otp}`;

    const message = `Your Password Token is:- \n\n ${TokenOtp} \n\n if you have not send requested this email then, pls ignore it`;

    await sendEmail({
      email: email,
      subject: "Otp Confirmation",
      message,
    });

    const salt = await bcrypt.genSalt();
    const hashedPwd = await bcrypt.hash(password, salt);

    const student = await Student.create({
      name: name,
      email: email,
      password: hashedPwd,
      uucmsNo: uucmsNo,
      stdYear: stdYear,
      phoneNumber: phoneNumber,
      active: false,
    });

    const Token = jwt.sign(
      {
        Phone_num: student.phoneNumber,
        st_id: student._id,
        Email: student.email,

      },
      process.env.JWt_Key,
      {
        expiresIn: "183d",
      }
    );

    res.status(200).json({
      success: true,
      Token,
      message: `Email send succesfully ${email}`,
    });
  } catch (error) {

    console.log(error);
    res.status(500).json({
      success: false,
      err: error.message,
    });
  }
};

// Endpoint to verify OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (otp !== otpStorage[email]) {
      return res.status(400).json({
        success: false,
        message: "Invalid Otp",
      });
    }

    // delete  otpStorage[email];

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      err: error.message,
    });
  }
};

// post:http://localhost:4000/api/v1/Login
exports.Login = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;

    
    const Data = await Student.findOne({ phoneNumber: phoneNumber });
 
    if (!Data) {
      return res.status(400).json({
        success: false,
        content: "Incorrect PhoneNumber",
      });
    }

    const issMatch = await bcrypt.compare(password, Data.password);


    if (!issMatch) {
      return res.status(400).json({
        success: false,
        content: "Incorrect Password",
      });
    }
    const Token = jwt.sign(
      {
        Phone_num: Data.phoneNumber,
        st_id: Data._id,
      },
      process.env.JWt_Key,
      { expiresIn: "180d" }
    );
    res.status(200).json({
      success: true,
      Token,
    });
  } catch (error) {

    res.status(500).json({
      success: false,
      err: error.message,
    });
  }
};

// get://localhost:4000/api/v1/me
exports.myProfile = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const DecodedToken = jwt.verify(token, process.env.JWt_Key);

    if (!DecodedToken) {
      return res.status(400).json({
        success: true,
        content: "invalid token",
      });
    } 
    const UserData = await Student.findById(DecodedToken.st_id);

    if (!UserData) {
      return res.status(400).json({
        sucess: false,
        content: "User cannot Fetch",
      });
    }

    res.status(200).json({
      sucess: true,
      UserData,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      err: error.message,
    });
  }
};

// put://localhost:4000/api/v1/marks/:id
exports.AddaMarks = async (req, res) => {
  try {
    // const token = req.headers.authorization;
    // const DecodedToken = jwt.verify(token, process.env.JWt_Key);

    // if (!DecodedToken) {
    //   return res.status(400).json({
    //     success: true,
    //     content: "invalid token",
      // });
    // }

    // const UserData = await Student.findById(DecodedToken.st_id);

    //  if(UserData.role === "student"){
    //   return res.status(400).json({
    //     success: true,
    //     content: "Student cannot acees",
    //   });
    //  }

    const { subjects } = req.body;
  
    let data = await Student.findById(req.params.id);

    if (!data) {
      return res.status(400).json({
        success: false,
        content: "student not found",
      });
    }

     

    subjects.forEach((subjectInput) => {
      // const index = data.subjects.findIndex(sub => sub.subjectName === subjectInput.subjectName);

      // if (index > -1) {
      //   // Subject exists, update marks
      //   data.subjects[index].marks = subjectInput.marks;
      // } else {
    //   //   // Subject doesn't exist, add new
        data.subjects.push(subjectInput)
      // }
      
    });


    
let totalMarks = 0;

 subjects.forEach(subject => {
 return  totalMarks += parseInt(subject.marks, 10);
});



    const finalUpdateMarks = totalMarks + data.TotalMarks

  
    data.TotalMarks = finalUpdateMarks;
    await data.save();
  
    const url = `${req.protocol}://${req.get("host")}/profile`;

    const message = `Hello ${data.name}  \n\n Your Internal Marks is Added \n\n pls visit On our Website to See a internal marks ${url }`;

    await sendEmail({
      email: data.email,
      subject: "Internal marks",
      message,
    });

  

    res.status(200).json({
      sucess:true,
      message: "Marks add  successfully",
      message: `Email send succesfully ${data.email}`,

    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucess: false,
      err: error.message,
    });
  }
};

exports.GetAllStudent = async (req, res, next) => {
  try {
    // const token = req.headers.authorization;
    // const DecodedToken = jwt.verify(token, process.env.JWt_Key);

    // if (!DecodedToken) {
    //   return res.status(400).json({
    //     success: true,
    //     content: "invalid token",
    //   });
    // }

    //  const UserData = await Student.findById(DecodedToken.st_id);

    //  if(UserData.role === "student"){
    //   return res.status(400).json({
    //     success: true,
    //     content: "Student cannot acees",
    //   });
    //  }
    const query =  { TotalMarks: -1 };
    const AllData = await Student.find({}).sort(query)


    res.status(200).json({
      success: true,
      AllData,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      err: error.message,
    });
  }
};



exports.GetStdInfo = async(req,res)=>{

  try {

   const Std = await Student.findById(req.params.id);

   res.status(200).json({
    sucees:true,
    Std
   })

  } catch (error) {
    res.status(500).json({
      sucess: false,
      err: error.message,
    });
  }
  
}


exports.findTopper = async (req, res, next) => {
  try {
   
   
    const query =  { TotalMarks: -1 };
    const limitCount = 10;    
    const stdTopppers = await Student.find({}).sort(query).limit(limitCount)


    res.status(200).json({
      success: true,
      stdTopppers,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      err: error.message,
    });
  }
};
