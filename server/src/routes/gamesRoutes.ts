import {Router} from 'express';
import {getGames, createGames, getOne, deleteGame, updateGame} from '../controllers/gamesController'

const router = Router();

router.route('/')
    .get(getGames)
    .post(createGames); 

router.route('/:gameId')
    .get(getOne)
    .delete(deleteGame)
    .put(updateGame);

export default router;

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