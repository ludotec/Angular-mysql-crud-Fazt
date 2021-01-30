import {Request, Response} from 'express';

export function getIndex(req: Request, res: Response) {
    res.send('Hello');
}




// class IndexController {

//     public index (req: Request, res: Response) {
//         res.send('Hello')
//     }
// }

// export const indexController = new IndexController();
