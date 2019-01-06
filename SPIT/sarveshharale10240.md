# Block Grains - Monitoring diversions in PDS outlets 

## Description
This project aims to increase the traceability of diversions occuring in PDS(Public Distribution System) outlets or Ration Shops. It aims to deploy all the data regarding the PDS supply chain on the blockchain so that it serves as a reliable source of data regarding

- Amount of food grains distributed to each PDS outlet
- Amount of food grains entitled to beneficiaries according to their ration card type
- Amount of food grains purchased by the beneficiaries
By deploying all the data on the blockchain, the PDS outlet dealer has no power of diverging food grains to open market or overpricing the commodities to the beneficiaries.

## Functions
The system has majorly 3 functions
* **Allocate Grains**

  This functionality allows the admin to allocate grains to distributors(ration shop owners). This functionality can only be used by the  admin.
* **Sell Grains**
 
  This functionality allows the distributor to sell grains to the beneficiaries at the prescribed price and the prescribed entitlement for different types of beneficiaries.
* **View Customer Usage**

  This functionality allows the distributor to view the details of previous purchases done by the beneficiaries.

## [Use case diagram link](https://drive.google.com/open?id=1ubao3C_DyHk9Fg-aiDu_YDQtM7UmA0eV)

## Technology stack / technology used ( Very Detailed )
-Languagues Used
-  Front End Frameworks: **HTML, CSS, Bootstrap, Javascript, JQuery**
-  Back End Frameworks: **Python - Flask**
-  Generating OTPs: **pyOTP**
-  Sending SMS(OTP): **Android**
-  Compiling and Deploying Smart Contracts: **Truffle**
-  Blockchain used: **Ganache**
-  Interacting with Smart Contracts: **Web3js**

-Libraries used 
-  **pyOTP**

   PyOTP is the OTP library for Python. It helps to generate both types of OTPs(counter-based and time-based). It generates a 6 digit OTP using some secret key. We decided to use this module instead of using fingerprint authentication due to 
-  **SQLAlchemy**

   SQLAlchemy is an ORM(Object Relational Mapping) library for Python. It provides an Object-Oriented API for accessing data sources. This module was used as an extension of Flask called flask_sqlalchemy.
-  **Socket**

   This module is used in Python to communicate with the Android device simulating an SMS server. It helps to send the beneficiary mobile no and the OTP which the Android device would send.
- **Truffle** 

  Truffle is framework used for compiling, deploying and interacting with smart contracts on the Ethereum blockchain. We chose Truffle beacuse we were familiar with it as we had used it in a previous hackathon.
- **Flask**

  Flask is a micro web framework for Python. We chose Flask because it has a smaller code footprint as compared to other frameworks like Django. We found it ideal for using it in a Hackathon because it is considered a good framework for prototyping. 

## Limitations

- This project does not cover the whole PDS supply chain but can be extended to cover the same.

- There already exists a database containing beneficiary data with his/her fingerprint information. (For real life implementation, the
Aadhaar database can be used)

- System need Internet connectivity to connect with the blockchain
network and transacting in real time

## Future Aspects

- This system can be extended to cover the whole PDS(Public Distribution System) supply chain i.e. from procurement from farmers
to consumption by beneficiaries thereby increasing transparency and accountability in the whole system.
- Online payments can be introduced

## [Github Link](https://github.com/Jatin-8898/SPIT-Hackathon)


## Contact Info 
Teamid: sarveshharale10240
1. Sarvesh Harale: sarveshharale10@gmail.com          Github: https://github.com/sarveshharale10
2. Jatin Varlyani: varlyanijatin88@gmail.com          Github: https://github.com/Jatin-8898
3. Ajay Yadav: ajayyadavfs80@gmail.com                Github: https://gihub.com/ajayyadav80
4. Prathamesh Shinde: prathameshshinde.3232@gmail.com Github: https://github.com/paddy32
