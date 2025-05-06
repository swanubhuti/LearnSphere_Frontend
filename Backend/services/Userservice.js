import prisma from "../database/db.config.js";
import bcrypt from "bcryptjs";


export const registerUser = async({name,email,password,role}) =>{
  const existingUser = await prisma.user.findUnique({
    where : {email}
  });
  if(existingUser){
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data:{
      name,
      email,
      password: hashedPassword,
      role: role || "student",
    }
  })
  return user;
}

export async function getUserByEmail(email) {
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      enrolledCourses: true, 
    },
  
  });
  return user;

}

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};