
import { SendTransaction } from "xdc-connect";

export const sendTransaction = async (tx) => {
   return await SendTransaction(tx);
};