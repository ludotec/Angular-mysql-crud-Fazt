import {Request, Response} from 'express';
import {connect} from '../database';
import { Game } from '../interfaces/gameInterfaces';


export async function getGames(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const games = await conn.query('SELECT * FROM games');
        return res.json(games[0]);
    }
    catch (e){
        console.log(e);
    }
}

export async function createGames(req: Request, res: Response): Promise<Response> {
    const newGame: Game = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO games SET ?', [newGame]);
    return res.json({
        message: 'Game created'
    });
}

export async function getOne(req: Request, res: Response): Promise<any> {
    const id = req.params.gameId;
    const conn = await connect();
    const games = await conn.query('SELECT * FROM games WHERE id = ?', [id]);
    if (games.length > 0) {
        return res.json(games[0]);
    }
    res.status(404).json({ text: "The game doesn't exits" });
}

export async function deleteGame(req: Request, res: Response): Promise<Response> {
    const id = req.params.gameId;
    const conn = await connect();
    await conn.query('DELETE FROM games WHERE id = ?', [id]);
    return res.json({
        message: `Game ${id} deleted`
    });
}

export async function updateGame(req: Request, res: Response): Promise<Response> {
    const id = req.params.gameId;
    const updateGame: Game = req.body;
    const conn = await connect();
    await conn.query('UPDATE games set ? WHERE id = ?', [updateGame, id]);
    return res.json({
        message: `Game ${id} updated`
    });
}


// class GameController {
    
    
//     public async list (req: Request, res: Response) {
//         const games = ('SELECT * FROM games');
//         res.json(games);
//     }
//     public getOne (req: Request, res: Response) {
//         const idGame = req.params.id;
//         res.json({text: `List game ${idGame}`});
//     }
//     public async create (req: Request, res: Response): Promise<void> {
        
//         res.json({message: 'Game saved'});
//     }
//     public update (req: Request, res: Response) {
//         const idGame = req.params.id;
//         res.json({text: `Updating a game ${idGame}`});
//     }
//     public delete (req: Request, res: Response) {
//         res.json({text: 'Deleting a game'});
//     }
    
// }

// const gameController = new GameController();
// export default gameController;