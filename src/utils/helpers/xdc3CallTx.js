
import { CallTransaction } from "xdc-connect";


export const readContract = async (tx) => {
   return await CallTransaction(tx);
};