import express from 'express';
import { loadUser, login, logout, register } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticated, loadUser);

export default router;