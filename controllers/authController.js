import userModel from '../models/userModel.js'; // ✅ Correct import

const registerUser=async(req, res) => {
  // Logic for registering a user
  try {
    const {userName,email,password,phone,address } = req.body;
    if (!userName || !email || !password || !phone || !address) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    } 
    
const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const user = await userModel.create({userName, email, password, phone, adress });
   const savedUser =await user.save();
    res.status(201).json({ message: 'User registered successfully' ,user: savedUser });
    
  } catch (error) {
    res.status(500).json({ success:false,message: 'Error registering user', error: error.message });
  }
};

const loginUser=async(req, res) => {
  // Logic for registering a user
  res.status(201).json({ message: 'User registered successfully' });
};

export { registerUser, loginUser };
