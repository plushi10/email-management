import { loginPage } from "./pages/logIn.js";
import { singinPage } from "./pages/singIn.js";
function router() {
    const app = document.getElementById("app");
    switch (window.location.hash) {
        case "#singIn":
            singinPage(app);
            break;
        case "#logIn":
            loginPage(app);
            break;
        default:
            loginPage(app);
            break;
    }
}
router();
window.addEventListener("hashchange", router);
//# sourceMappingURL=script.js.map