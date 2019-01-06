# Project Name: CertiBloc

## Description:
An Organization (Ex:Coursera) is verified using the RSA algorithm before the certificate is uploaded on the blockchain.If the Organization is faulty the transaction will be reverted.Once the certificate is uploaded on the blockchain it is displayed on the users' portal.The user can then send this certificate to the verifier for verification. The certificate along with the transaction hash is sent to the verifier. The verifier can then retrieve the certificate hash from the blockchain using the transaction hash and match it with the certificate hash received by the user.

## Functions
1. Ensure authentic certificates can be verified
2. No possible way that someone can copy the whole process to create
inauthentic certificate
3. We hash the certificate that is to be issued by a certain party
4. The hash of certificate is available on the blockchain, thus confirming that the certificate was indeed issued by a legitimate party. If the hash is found, then the certificate is authentic.

## Use case diagram link
https://drive.google.com/open?id=1xlbjOlpfzgKTdssomMK1eTIESHIAeekn

## Technology stack / technology used ( Very Detailed )
1. Hybrid Blockchain - It is a combination of public and private blockchain used by individuals to reap their benefits.

2. Bootstrap 4 - For responsive web designing and enhancing the user experience.

3. Html - For web development and displaying the UI elements.

4. Javascript - For web development, logic implementation and improving user experience.

5. JQuery - For resolving cross-platform compatibility issues and simplifying javascript functionalities.

6. Solidity - A combination of C++, Javascript, Python. It is a Smart Contract scripting language used for verifying all the conditions. Our smart contract verifies the authenticity of the organization and the certificate of the user.

7. Web3.js - An important library used for interacting with the local ethereum node.

8. Metamask - A Google Chrome Extension for demonstrating the user accounts.

9. Truffle - A testing framework and asset pipeline for making the rapid development.

10. Ganache - A personal blockchain for Ethereum development providing 10 user addresses with private keys.

## Limitations
1. The issuer and receiver must trust the system and
there should be an accepted standard
2. Changing to a brand new system is tiresome and
tedious.

## Future Aspects
If an organization has to upload many certificates, instead of uploading each and every certificate on the blockchain, it can upload hash of the Merkle tree formed using hashes of all the certificates. The final Merkle root can then be uploaded on blockchain. Now to verify a single certificate the organization will send a packet comprising the certificate hash, Merkle Tree hash and the transaction hash. Along with this packet a digital signature will also be sent. This improves the usage efficiency of blockchain.

## Github project link: https://github.com/harsh9500/Certification

## Contact info ( emailid - github id ): 
harsh9500@rediffmail.com - harsh9500
harshitaskh@gmail.com - tenzu15
shreeyaa98@gmail.com - shreeyaaa98
farhankasmani956@gmail.com - FarhanKasmani
