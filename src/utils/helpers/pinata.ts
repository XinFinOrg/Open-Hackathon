
import { getPinataAPIKey, getPinataAPISecret } from "../../configs/pinataConfig";
import pinataSDK from '@pinata/sdk';
import axios from 'axios';


export const uploadMediaFileToIPFS = async (fileToUpload: File): Promise<string> => {
  const data = new FormData();
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  data.append('file', fileToUpload);

  const result = await axios.post(url, data, {
    headers: {
      'Content-Type': `multipart/form-data;`,
      pinata_api_key: getPinataAPIKey(),
      pinata_secret_api_key: getPinataAPISecret()
    }
  }).catch(function (error) {
    console.log('Error ', error);
  });

  const dataToReturn = JSON.parse(JSON.stringify(result)).data;
  return dataToReturn.IpfsHash;
};

export const uploadJSONFileToIPFS = async (jsonData: Record<string, string>): Promise<string> => {
  const pinata = pinataSDK(getPinataAPIKey(), getPinataAPISecret());
  const result = await pinata.pinJSONToIPFS(jsonData);
  return result.IpfsHash;
};


