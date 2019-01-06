# Project Name
Degree Verifier

## Description
In today’s world, there are many people who deliberately modify college degrees to their benefit and there are many to help them in exchange for money. Modifying the degree in order to get better jobs is a common issue. If this trend is not stopped, it can decrease the quality of the students as well as the quality of employees. Also modification of the college degrees can be a serious concern for the college when it comes to its reputation. We present a website as well as android app to solve the problem through blockchains and smart contracts. The college will be given access to the applications. All the user has to do is upload the document in any application and the application will add data in blockchain through smart contracts. The company wishing to verify the degree(s), verifies it through any application. The process of verifying the document in the backend takes place through smart contracts. ​ They give us the fruitful advantages of autonomy, trust, backup, safety, speed,
savings, accuracy.

## Functions
Web application can be accessed by colleges and company. Through web application and android application, a college can upload a student degree in the blockchain which cannot be tempered again by any third party. Colleges can also verify degree that are in blockchain. The company can only verify the degrees in the blockchain. Verification process is achieved by comparing the hash values of document to be verified and its already uploaded hash.

## Use case diagram link
https://github.com/RobCop28/DegreeChecker/blob/master/degree%20checker.jpeg

## Technology stack / technology used ( Very Detailed )
For making Web application.
FrontEnd designing- HTML, CSS, Bootstrap
BackEnd - Javascript, NodeJS
To interact with blockchain network - Web3.JS

For making Android application.
Android Studio
FrontEnd designing- XML
BackEnd - Java
To interact with blockchain network - Web3.J

BlockChain network
Blockchain development - Ganache
Ganache is used to deploy contracts, develop applications, and run tests.It is available as both a desktop application as well as a command-line tool. 
Smart Contracts - Solidity
Solidity is a contract-oriented, high-level language and we used it for implementing smart contracts. 
Metamask
MetaMask lets the user create and manage their own identities, so when a Dapp wants to perform a transaction and write to the blockchain. It is an extension for accessing Ethereum enabled distributed applications.
Infura
It provides support to generate API to interact with smart contracts.

Hashing Function to convert docx to string data
SHA-256 cryptographic hash algorithm. SHA-256 generates an almost-unique 256-bit (32-byte) signature for a text. We are using this algorithm since in blockchain we store small size data. We cannot store docx since large size. So we convert it into string that can be easily store in database.


## Limitations
Currently it can verify only the final college degrees since we are storing the hash string for final college degrees in blockchain. It can only check the final credentials of the student but not his/her full portfolio. It cannot verify the transcripts per semester since we are not storing any data about it. There is also limitation of number of transactions a college can do, since every node in the network has to verify the transaction. We are using APIs like metamask and Infura which contain many errors right now and are still in developing mode. Some change(s) or new addition(s) can stop the application from running. The version of solidity greatly affects the working of smart contract code, slight change affects the working of project.

## Future Aspects
Our project can greatly help to avoid fraud and tempering of college degrees. The project can be further extended to verify the full portfolio of the student. We can also extend this project to verify government documents and minimising any kind of ill practices undertaken in public voting. It can also be used to create online contests, judging platform for various social issues and  T.V shows. We can also use this project to accomplish online business or trading between 2 or more parties. Basically, we can exploit the power of blockchain and use our project to solve any problem which requires credibility, assurance and transparency.

## github project link
Web Application
https://github.com/DemonDaddy22/SPIT
Android Application
https://github.com/RobCop28/DegreeChecker

## Contact info ( emailid - github id )
Team ID- RISHAB.GARG100669
Team - DOSADI
Team Members:
Rishab Garg (9876982979) rishab.garg100@gmail.com
https://github.com/rishabgarg100
Rishabh Gupta (9654815436) rish.gupta34@gmail.com
https://github.com/RishabhGupta34
Rohan Gupta (7986067510) guptarohan369@gmail.com
https://github.com/DemonDaddy22
Robin Singh (7973310589) robinmahi72@gmail.com
https://github.com/RobCop28
BE-COE UnderGraduate 3rd year
College:
Thapar Institute Of Engineering And Technology, Patiala, Punjab

