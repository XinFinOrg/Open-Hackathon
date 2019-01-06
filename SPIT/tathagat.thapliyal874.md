# Project Name
CropBuddy

## Description
Saying that the Indian farmer today faces a lot of problems is an understatement. One of the bigger problems the solution to which got pushed to the bakcburner is the problem of accountability. Who is responsible if the yield goes bad during transportation? Is it the farmer who gave substandard quality of yield, or is it the transporter who provided substandard quality of tranportation services.

We aim the solve this problem using blockchain and some other technologies as well.

## Functions
Enter journey details - It takes care of all the credentials of a particular journey. Credentials coded - 
	moduleInstructions (temperature and humidity from sensor)
	time - timestamp of the block
	driverName - name of driver
	farmerName - name of farmer
	from(source) - location of loading of crop batch
	to(destination) - delivery location
	dataId 

View blockchain data - Display the blockchain data

Fetch sensor data - Fetches the data from temperature and humidity sensor and the machine learning model (if the model pings) and then pushes it to the blockchain using the push sensor data function

Push sensor data - Pushes the sensor data to the blockchain

## Use case diagram link

https://drive.google.com/open?id=1fXc0qAfXdazTjzajnwSspe7KeTQnz6UM

## Technology stack / technology used
NodeJs
Language - JavaScript
Dependancies - web3js, ganache-cli, express-server

web3js - This is the official ehtereum javascript API. It is used to interact with ethereum smart contracts. It is a collection of modules which contrain specific functionality for the ethereum ecosystem.
https://github.com/ethereum/web3.js/

ganache-cli - Previously known as TestRPC uses ethereumJs to simulate full client behaviour and makes developing ethereum applications faster and easier. Because it's based on NodeJs, we need NodeJs installed along with npm. Now, instead of deploying and testing in JS virtual machine we are now using ganache-cli client on our local machine.
https://github.com/trufflesuite/ganache-cli

express-server - It is a javascript framework used to create API calls. 
https://expressjs.com/

Remix-IDE
Language - Solidity
We have used solidity to write smart contracts. Remix helps in compilation of the smart contract
https://github.com/ethereum/remix-ide

Raspberry Pi
Sensor used - DHT11 
Language used - Shell, Python 2.7
https://www.instructables.com/id/DHT11-on-Raspberry-PI/


Machine Learning (Object detection and recognition) <br>
Language used - Python 3 <br>
Libraries used - darkflow, tensorflow, matplotlib (data labelling), OpenCV 2(rendering video, labelling data), google-images-download(data collection) <br>
Model used - YOLO v2 tiny <br>
Original model weights and configuration can be found here - https://pjreddie.com/darknet/yolov2/ <br>
API used to fine-tune/test/deploy model along with detailed instructions to train custom model - https://github.com/thtrieu/darkflow <br>
Google-images-download - https://github.com/hardikvasa/google-images-download <br>

The DarkFlow library was used as the documentation for TensorFlow's object detection API is scarce and scattered all over the internet. <br>
TensorFlow's API does provide a guide to setup the model but there is no how-to which tells how to train/test/deploy a custom model. <br>

Role of Machine Learning <br>
Multiple models for the crop will be trained as per requirement of the crop. <br>
So for tomato we will be training 3 models. <br>
One will recognise tomatoes in general, <br>
One will recognise visibly fresh tomatoes <br>
One will recognise visibly rotten/bad tomatoes <br>
Each of the three models will be used to count what they recognise during loading of crop batch which will determine the quality of the batch <br>
1 - Batch quality = ( no. of visible bad tomatoes / total number of tomatoes ) * 100 <br>

The model which recognises rotten tomatoes will be uploaded to the embedded system and will be given sufficient computational power to run in real time <br>
As soon as the model recognises a bad tomato, the frame along with the bounding box enclosing the tomato will be pushed into the blockchain. <br>



## Limitations
1. For each crop more than 1 model has to be fine-tuned/trained, tested and deployed. <br>
2. This totally depends on the cooperation of the transportation company. Any tampering with the hardware will be reported back to us. <br>
3. In case the hardware is damaged we will have to take full responsibility and repair it in time. <br>
4. In case of evidence of any tampering, the transportation company will be held liable for it. <br>
5. For every crop yield the quality of the crop is determined differently so the tech stack has to be finely tuned to match that crop’s needs. Also if multiple crops are being transported in the same vehicle, we will have to fit multiple sets of our technology. <br>


## Future Aspects
1. Can be used to judge driver performance. <br>
2. The IoT system deployed can be used to warn the driver of any and all mishaps such as the cargo door opening up during commute
3. Can be expanded to other perishable items such as volatile chemicals. <br>
4. Will help set a standard and enforce it across all transportation companies. <br>
5. Can be expanded to a transportation company of its own. <br>


## github project link

## Contact info ( emailid - github id )

tanmaybhatnagar84976@gmail.com : https://github.com/tanmay-bhatnagar <br>
anshgujral1997@gmail.com : https://github.com/gujral1997 <br>
tathagat.thapliyal@gmail.com : https://github.com/tathagat2006 <br>
