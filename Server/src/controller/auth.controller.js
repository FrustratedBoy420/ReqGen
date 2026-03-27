import { Project } from "../models/project.model.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/Api-response.js";
import { main } from "../AI/AIbot.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { User } from "../models/user.model.js";

const generateAccessandRefreshToken=async (userID)=>{
    try {
        const user=await User.findById(userID);
        if(!user){
            throw new ApiError(404,"User not found")
        }
        const accessToken=user.generateAccessToken();
        const refreshToken=user.generateRefreshToken();

        user.refreshToken=refreshToken;
        await user.save({validateBeforeSave:false});

        return {accessToken,refreshToken};

    } catch (error) {
        throw new ApiError(500,"Something went wrong !!")
    }
}
const generateProjectPlan = asyncHandler(async (req, res) => {
  try {
    const { idea } = req.body;

    const userId = req.user._id; 

    const result = await main(idea);

    const newProject = await Project.create(result);
    newProject.createdBy=userId
    await User.findByIdAndUpdate(userId, {
      $push: { projectID: newProject._id }
    });
    await newProject.save();
    return res.status(201).json(
      new ApiResponse(200, { result }, "Plan Generated")
    );

  } catch (err) {
    console.error(err);
    throw new ApiError(500, err.message);
  }
});
const registerUser=asyncHandler(async (req,res)=>{
    
    const {username,email,password,fullName}=req.body;

    const existedPerson=await User.findOne({
        $or:[{username},{email}]
    })

    if(existedPerson){
        throw new ApiError(401,"This Username or Email Already Connected To Someone Profile")
    }

    const newUser=await User.create({
        username,
        email,
        password,
        fullName
    })
    await newUser.save();

    const createdProfile=await User.findById(newUser._id).select(
        "-password -refreshToken"
    )
    if(!createdProfile){
        throw new ApiError(402,"Profile Creation Failed!!!!")
    }
    return res
            .status(202)
            .json(new ApiResponse(
                202,
                {Profile:createdProfile},
                "Profile Created Successfully!!"
            ))
    
})

const login=asyncHandler(async (req,res) => {
    const {email,password}=req.body;

    if(!email || !password){
        throw new ApiError(404,"Both Email and Password are Required")
    }

    const loginProfile=await User.findOne({email});

    if(!loginProfile){
        throw new ApiError(201,"User Doesn't Exist")
    }

    const isPasswordValid=await loginProfile.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(403,"Password Is Invalid!!")
    }

    const {accessToken,refreshToken}=await generateAccessandRefreshToken(loginProfile._id);

    console.log(accessToken);
    
    const loginUser=await User.findById(loginProfile._id).select("-password");
    const options={
        httpOnly:true,
        secure:true
    }

    return res
            .status(203)
            .cookie("accessToken",accessToken,options)
            .cookie("refreshToken",refreshToken,options)
            .json(new ApiResponse(
                203,
                {user:loginUser,accessToken:accessToken,refreshToken:refreshToken},
                "Logged In Successfully"
            ))

})

const logout=asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken:""
            }
        },{
            new:true
        }
    )

    const options={
        httpOnly:true,
        secure:true
    }

    return res
            .status(203)
            .clearCookie("accessToken",options)
            .clearCookie("refreshToken",options)
            .json(
                new ApiResponse(
                    203,
                    {},
                    "Logout Successfully"
                )
            )
})


export {generateProjectPlan,registerUser,login,logout}