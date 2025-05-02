import { getUserByEmail, registerUser } from "../services/Userservice.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt  from 'bcryptjs';
import prisma from "../database/db.config.js";

export const register = async (req, res) => {
    try {
        const {name ,email,password,role} = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }
        
        await registerUser({ name, email, password,role });

        return res.status(201).json({
            success: true,
            message: "Account created successfully.",
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: error.message || "Failed to register.",
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }
        // Check if user exists
        const user = await getUserByEmail(email);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }
        generateToken(res, user, `Welcome back! ${user.name}`);
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: error.message || "Failed to login.",
        });
    }
}
export const logout = async (_,res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message:"Logged out successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to logout"
        }) 
    }
}
export const loadUser = async (req, res) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.id },
        select: {
          id: true,
          name: true,
          role: true,
          enrolledCourses: {
            select: {
              id: true,
              courseTitle: true,
              category:true,
            },
          },
        },
      });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ user });
    } catch (error) {
      console.error("Error loading user:", error.message);
      res.status(500).json({ message: "Failed to load user" });
    }
  };
 