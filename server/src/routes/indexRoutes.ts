import {Router} from 'express';
import {getIndex} from '../controllers/indexController';


const router = Router();

router.route('/')
    .get(getIndex);

export default router;

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