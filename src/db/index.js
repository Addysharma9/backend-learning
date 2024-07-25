import mongoose from 'mongoose';
import {DB_NAME} from '../../src/constants.js';

 const jaga =  async()=>{
    try {
        const DB_INSTANCE = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
        console.log(`DB Is Connected !! at host ${DB_INSTANCE.connection.host}`);
        
    } catch (error) {
        console.log("Error\n",error);
        process.exit(1);
    }
}
export default jaga