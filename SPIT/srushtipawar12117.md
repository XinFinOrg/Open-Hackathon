Project Name-Certification using Blockchain
Description:
In the system, the authority issues a certificate to a recipient by verifying if the applicant fulfills the eligibility criteria through the smart contract. If yes then the authority generates an certificate with a unique id and QR code for the applicant and appends it to a blockchain. If verification fails, request is cancelled. Then this unique id/ QR code ,is provided to applicant.Applicant can view his/her certificates.No two issuers can issue a same certificate to same recipient which avoids the case of dublicacy.

Functions
1.Registration of Recipient and Issuer
2.Checking of valid recipient and issuer
3.Registration of certificate by creating a unique hash
4.Checking duplicacy and issuing certificate
5.Viewing certificates issued by the issuer
6.Generation of certificates with QR code issued 
7.Recipients can view certificates issued to them

Use case diagram link
https://drive.google.com/file/d/1_vf2HJPUiSYrcQayqSykqAZ2n2Iz1SPp/view?usp=sharing
Technology stack / technology used ( Very Detailed )
1.Truffle -
	Truffle is a development environment which is providing a command-line tool to compile, deploy, test, and build.This framework providing various packages to make it easy to write tests, deployment code, build clients. It is used to build ethereum-based DApps.It allows developers to spin up smart contract project at the click of a button and provides you with a project structure, files, and directories that make deployment and testing much easier.

2.Ganache:- Ganache allows you to create a private Ethereum blockchain for you to run tests, execute commands, and inspect state while controlling how the chain operates. It gives you the ability to perform all actions you would on the main chain without the cost. 
it creates a virtual Ethereum blockchain, and it generates some fake accounts that we will use during development.

3.Metamask-
	MetaMask is a browser extensions that lets you run dApps without being part of the Ethereum network as a Ethereum Node and run smart contracts on that Node.
4.vue.js
	Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

5.solidity
	Solidity is known as a contract-based, high-level programming language. This platform has similar syntax to the scripting language of JavaScript. Solidity as a programming language is made to enhance the Ethereum Virtual Machine. Solidity is statically typed scripting language which does the process of verifying and enforcing the constraints at compile-time as opposed to run-time.
	
6.npm
	npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.

Limitations
1.As smart contracts are immutable , there is no way we can correct slightest mistakes in certificates. 
2.Since the documents are nearly impossible to change, even the slightest error in code can turn out to be expensive and time-consuming to correct once the smart contract is deployed to execute.

Future Aspects
1.A recipient can any time revoke or grant permissions to access or view his/her certificate hash or QR code.
2.Recipient has full authority to control access to his/her certificates
3.Implementing this system in real large scale data as in government bodies and educational institutions
4.The unique id/ QR code ,lets the business authority to access applicant’s record .Applicant can accept or deny request of business authority to view his/her certificates.
github project link
https://github.com/srushti98/ECertification
Contact info ( email id - github id )
1.Pranali Bora 
2.Snehal Chaudhari 
3.Madhura Satao
4.Srushti Pawar : srushtipawar12@gmail.com

