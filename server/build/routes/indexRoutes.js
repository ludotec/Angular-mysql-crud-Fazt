"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
const router = express_1.Router();
router.route('/')
    .get(indexController_1.getIndex);
exports.default = router;
// class IndexRoutes {
//     public router: Router = Router();
//     constructor() {
//         this.config();
//     }
//     config(): void {
//         this.router.get('/', indexController.index);
//     }
// }
// const indexRoutes = new IndexRoutes();
// export default indexRoutes.router;
