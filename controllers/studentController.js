const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const studentModel = require('../models/studentModel');
const sendToken = require('../utils/jwtToken');

// Register Student controller
exports.registerStudent = catchAsyncError(async(req, res, next)=>{
    const { firstName, lastName, fatherName, motherName, dob, email, password, mobileNumber, className, gender, currentSessionId } = req.body
    const user = await studentModel.create(
        { firstName, lastName, fatherName, motherName, dob, email, password, mobileNumber, className, gender, currentSessionId }
    );

    sendToken(user, 200, res);
});

// Login Student
exports.loginStudent = catchAsyncError(async(req, res, next)=>{
    const { email, password } = req.body;

    if(!email || !password){
        return next(new ErrorHandler('Please Enter username and password', 401));
    }

    const student = await studentModel.findOne({email}).select('+password');

    if(!student){
        return next(new ErrorHandler('Invalid username and password', 401))
    }

    const isPasswordMatched = await student.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler('Invalid username and password', 401));
    }

    sendToken(student, 200, res);
});

// get total number of student in school
exports.getStudentsCount = catchAsyncError(async(req,res)=> {
    const count = await studentModel.countDocuments();
    res.status(200).json({
        success: true,
        count
    });
});

//Get details of a particular student
exports.singleStudentDetail = catchAsyncError(async(req,res)=> {
    const details = await studentModel.find({_id: {$eq:req.params._id}});
    res.status(200).json({
        success: true,
        details
    });
});
// Get details of all students
exports.studentDetails = catchAsyncError(async(req,res)=>{
    const details = await studentModel.find();
    res.status(200).json({
        success: true,
        details
    })
})