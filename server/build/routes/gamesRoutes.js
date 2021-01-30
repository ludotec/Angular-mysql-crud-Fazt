"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = require("../controllers/gamesController");
const router = express_1.Router();
router.route('/')
    .get(gamesController_1.getGames)
    .post(gamesController_1.createGames);
router.route('/:gameId')
    .get(gamesController_1.getOne)
    .delete(gamesController_1.deleteGame)
    .put(gamesController_1.updateGame);
exports.default = router;
// class GamesRoutes {
//     public router: Router = Router();
//     constructor() {
//         this.config();
//     }
//     config(): void {
//         this.router.get('/', gameController.list);
//         this.router.get('/:id', gameController.getOne);
//         this.router.post('/', gameController.create);
//         this.router.put('/:id', gameController.update);
//         this.router.delete('/:id', gameController.delete);
//     }
// }
// const gamesRoutes = new GamesRoutes();
// export default gamesRoutes.router;
