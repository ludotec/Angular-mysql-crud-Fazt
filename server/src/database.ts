import {createPool} from 'mysql2/promise';
import keys from './keys';


export async function connect(){
    const connection = createPool(keys.database);

    return connection;
}

