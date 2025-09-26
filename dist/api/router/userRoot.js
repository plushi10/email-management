import { Router } from "express";
import { userService } from "../../services/userRepository.js";
const router = Router();
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await userService.findUser(email, password);
        if (result !== null) {
            res.json({ success: true, message: "log in  success" });
        }
        else {
            res.status(401).json({ success: false, message: "Credenziali errate" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
export default router;
//# sourceMappingURL=userRoot.js.map