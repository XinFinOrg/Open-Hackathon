# Project Name
Commuter Safety

## Problem statement
★ The news papers are full of articles where a road accident is caused due to lack of
awareness and lack of proper communication.
★ The neglect and poor maintenance of Indian roads have made the road travel very
hazardous.
★ The number of deaths due to road accidents in India stood a whooping 400
deaths/day.
Causes of Road Accidents :-
➔ Falsifying payment application: Pay applications from subcontractors need to be
monitored and scrutinized closely for errors or irregularities.
➔ Billing for Unperformed Work: A subcontractor, for example, might overstate the
units of production accomplished, the units of labor or the equipment actually used.
➔ Subcontractor Collusion: Another area to watch out for is bid rigging and price fixing.
It is important to pre qualify and pre-approve subcontractors, give them the full scope
of work to bid on, and then pick the lowest-priced, most qualified and responsive
Subcontractor.


## Description
Module 1: Solving Existing issues:
Commuter Safety Project - 
Aims at creating awareness amongst citizens/commuters about unsafe, accident prone and dangerous areas in the cities by using their current location. It makes the commuters’ journey safer and also helps the authorities to save numerous lives that would have been lost due to lack of awareness about the accidents/potential dangers in the surrounding. Image classification techniques will be used to detect the genuineness of the accident prone type for which the data is uploaded.

2) Module 2: 
Right from scratch-
Smart Road Contracts using Blockchain - A Decentralised system, where each authority is aware about the whereabouts of the other authorities involved for road construction work. This ensures honest and non corrupt working of the various authorities involved in the construction of the road. Also prevents the contractors from publishing the fake documents.

Our project “Commuter Safety” aims at creating awareness amongst citizens/commuters about unsafe, accident prone and dangerous areas in the cities by using their current location. It will send people notifications if they have entered a particular “unsafe” area. These areas would include places where there are chances of death/injuries due to potholes or a tree may fall, a bridge may collapse or etc. This allows the user to take necessary precautions or select an alternative route. It makes the commuters’ journey safer and also helps the authorities to save numerous lives that would have been lost due to lack of awareness about the accidents/potential dangers in the surrounding.


## Working
In our application “Commuter Safety”, Each user will login and have a specialized account, a live forum where people will upload photos clicked by their camera about an unsafe/dangerous/suspicious location/incident along with a few lines describing it. 
We would be using the Awareness API which uses geofencing, in which a geographic region is defined, and the app receives call-backs when a user enters or leaves this region. The Fence API expands on the concept of geofencing to include many other context conditions in addition to geographical proximity. 
The app receives call-backs whenever the context state transitions.
When the user passes/lives by the unsafe area, they will be notified and can view the image and location of the unsafe area. He/ She can also comment on the area. 
The app performs NLP(Natural Language Processing) based sentiment analysis on that comment and produce a normalized rating based on which the Google Map geofence will turn yellow, orange or red indicating the degree of danger. 
After some time, if the potential danger is reduced, the geofence will change colours again or be removed from the map. Also, to segregate the photos which are unreliable/incorrect we plan on using various image processing and ML techniques like facial recognition to prevent users from uploading unwanted images i.e selfies and filtering to free the images from human elements and make the app more accurate. 
Also will be using CNN(Convolutional Neural Networks) to check the genuiness of a particular zone which the users uploads. We will have an automated chat bot which uses NLP and is retrained periodically to address any queries that the user poses. We will be using firebase as it provides application developers an easily integrable API that allows the data/images to be synchronized across all client devices.

WHY BLOCKCHAIN?
➢ Every transaction recorded between government, dealers and contractors is
linked to previous transactions and is standardized for every participating
node in blockchain.
➢ As every entry is retractable across its full history and can be reconstructed,
there is no chance of any fraud in the transactions.
➢ There is a standard network protocol in blockchain that allows every
participating node to receive every transaction and apply the same validation
rules.
➢ Blockchain is a decentralized system & it requires all the members of the
network to authenticate a transaction (consensus). So that every participating
body is well aware of all the operations in the system.
➢ A key point of the this idea is to ensure all transactions are validated and all
valid transactions are added once and only once. No valid transactions can be
omitted so that there is no discrepancies in the transactions.


## Functions
Government can set tender for road construction
Contractor can apply  in for tender
KYC for all the participants
Lowest bidder winner
Create dangerous zone
Awaring people about the unsafe zones
Deep learning model that validates the severity of dangerous zone
Transparency throughout supply chain management(Everyone knows everything)
Financers can invest money as per the return policy


## Use case diagram link
![spit hackathon](https://user-images.githubusercontent.com/32198451/50732306-4d3f2680-119e-11e9-8573-76672aff387e.png)

## Technology stack / technology used ( Very Detailed )

Technology stack
Web3.js:
It is a collection of libraries which allows us to interact with a local or remote ethereum node, using a HTTP or IPC connection. The web3.js library is the official Ethereum Javascript API. It is used to interact with Ethereum smart contracts. It is a collection of modules which contain specific functionality for the ethereum ecosystem.
Ganache CLI:
previously known as TestRPC uses ethereumjs to simulate full client behavior and makes developing Ethereum applications faster, easier, and safer. It also includes all popular RPC functions and features like events and can be run deterministically to make development a breeze. Because it’s based on Node.js, we need Node.js installed along with NPM (Node Package Manager) to install Ganache CLI.
Solidity:
Solidity is the language that you can use to code the actual smart contracts. The syntax is very similar to JavaScript and it’s designed with the Ethereum Virtual Machine in mind. Solidity is statically typed, supports inheritance, libraries and contains complex user-defined types.
Android
Android Backend-Firebase
Image Recognition Model-TensorFlow,Keras
Django Server

## Limitations
1.)Oracle problem  
2.)Blockchain cannot ensure that input data is correct
3.)Result is based on crowd sourced data
4.)Only prevents scam rather than stopping it at runtime


## Future Aspects
IOT integration.
Check point returning of escrow values
More of sensor values then human validation
Integrating Blockchain with Android App


## github project link
https://github.com/Jinay98/Spit-hackathon-blockchain

## screenshots
![capture1](https://user-images.githubusercontent.com/32198451/50732314-76f84d80-119e-11e9-9b6f-8d959e9459e2.JPG)



![capture](https://user-images.githubusercontent.com/32198451/50732320-9000fe80-119e-11e9-81a7-c7bd030084cb.JPG)

## Contact info ( emailid - github id )
jinay.parekh@spit.ac.in
jinay98
