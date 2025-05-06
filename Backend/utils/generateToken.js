import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
  const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  // const refreshToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
  //   expiresIn: "7d",
  // });

 res.cookie("token", accessToken, {
  httpOnly: true,
  secure: false, // must be true in production (HTTPS)
  sameSite: "lax", // "none" only if cross-origin and using HTTPS
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
});

  // res.cookie("refreshToken", refreshToken, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  //   sameSite: "strict",
  //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  // });

  return res.status(200).json({
    success: true,
    message,
    user,
  });
};
