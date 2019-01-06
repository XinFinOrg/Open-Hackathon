# Project Name
HealthCollab: Blockchain Healthcare solution
## Description
Healthcare is one of the huge markets worldwide. Although huge amounts are allocated in this sector no significant improvement can be seen this scenario. The main source of this problem are the excessive costs of testing and useless treatment. Risk of running into data thefts is also high as security is often overlooked or poorly protected in the Health Services. in  Recently technology has started to lay its root deeper in this field with BlockChain at the  forefront
HealthCollab is one such blockchain solution which takes into account the above listed issues like securely storing the patients medical information as well as provides a prediction model based on this data, which is only collected with the consent of the patients to which they are rewarded with some tokens.
The prediction model currently focuses on the Breast Cancer domain and can be extended to any health issue by suitable data size and integrity. Placing patient at the center of digital transformation of healthcare.

## Functions
HealthCollab implements the smart contract format for implementation of the structure of the blockchain network. The contract contains various functionalities of the different types of users that will be able to access the blockchain.
The users are divided into 3 types:
.ADMIN
.HOSPITAL
.PATIENT

...ADMIN...
The Admin can add new hospitals to the network which act as the node. No Hospital can be added until and unless the Admin does so. New nodes can only added with the admins consent. 

...HOSPITAL...
Once the Hospital is added to the blockchain an authorized person can then add the patient records to the network. The patients details include the disease symptoms, the day on which the person is admitted as well as when the patient is discharged apart from these it also stores the patients blockchain address.

...PATIENT...
The patient can view his account for the tokens he has received for providing the data. The patient can also see his medical record details.

The patients data is added to the network and after the suitable diagnosis the patient is offered an incentive for sharing his/her information with the hospital for adding to the prediction model or for further studies. This can improve the diagnosis significantly.  

Apart from this the hospital can get the number of patients visited each day and also those discharged from the hospital.

Machine Learning model is used for effective prediction and can serve as an important guideline for the diagnosis of the patients visiting henceforth.

Since the consent of the patients is already obtained the dataset can be used or sold to medical institutions for research.

Security as well as the data integrity is achieved in the process as it is collected from an authenticated source.


## Use case diagram link
https://creately.com/diagram/jqk120xj/24rbK03SpnI60icaE2tBI3c9Fg%3D

# Technonology Stack
...Ganache: It is very user friendly so we used it extensively for managing  the accounts and the Deployment of Blockchain. 

...Truffle: It was used for Smart-Contract compilation and Linking also it was used to deploy private Ethereum blockchain on Local Machine. 

...Web3: API used to communicate client side application with blockchain nodes.

Machine Learning:

...Keras: Machine learning module for python. Data for breast cancer is trained on the Keras. It also uses tensorflow in the backgound.

...Flask: Deploying the machine learning model trained by keras on the network(currently localhost). It is integrated to the client side application.


## Limitations
Legacy softwares have been there for a very long time and have very deep roots, aging before the internet. People have achieved a good comfort level using them hence convincing them to adapt to this new technology can be very challenging however an integration between these technologies can be game changer. Large medical organization can be hit by it.

Yet unpopular, It will be difficult for people to adapt to these technologies as its maintenance and cost of storage are two uncertain things which might discourage them.  

Huge technological resources are required for the storage of data as the data may include high resolution images.


## Future Aspects
The use case of this technology in the field of HealthCare is widespread. With the value of data increasing day by day its security and integrity are a major concern to the medical community and can revolutionize the field of HealthCare. 
Since the data source is from a trusted source any sort of medical conditions can be successfully predicted with a substantial amount of data in the dataset. And can be integrated with the chain.
Selective visibility can be given to the patients data by the patients themselves.
Insurance fraud are one of the major consent costing $40 billion per year as claimers often exaggerate their conditions for monetary benefits or otherwise. This can be prevented by bringing insurers in to the loop.
The telemedicine industry can prosper by increasing the accessibility of the chain. Due to a decentralized chain, patients can consult a doctor who might not be geographically accessible to the patients. Doctors or Researchers having access to the data can directly contact the person willing to share the details personally. This will increase transparency as well as it will create a sustainable health ecosystem.
 
	Since medical data is one of the most valuable asset of a person many technology  giants would like to integrate with this platform and would like to introduce their wide suite of tools and resources to revolutionize this field.


## github project link
https://github.com/SaumitraChaskar/SpitHackathon

## Contact info ( emailid - github id )

Saumitra Chaskar - somi.chaskar@gmail.com    
Jinang Gandhi - jinanggandhi@gmail.com    
Ishwarlal Hingorani - hingoraniishwar5@gmail.com    
Arnab Ghorai - arnabaghorai@gmail.com   
