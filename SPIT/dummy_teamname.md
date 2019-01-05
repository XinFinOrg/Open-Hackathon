# Project Name
CropBuddy

## Description
Saying that the Indian farmer today faces a lot of problems is an understatement. One of the bigger problems the solution to which got pushed to the bakcburner is the problem of accountability. Who is responsible if the yield goes bad during transportation? Is it the farmer who gave substandard quality of yield, or is it the transporter who provided substandard quality of tranportation services.

We aim the solve this problem using blockchain and some other technologies as well.

## Functions

## Use case diagram link

## Technology stack / technology used ( Very Detailed )

Machine Learning (Object detection and recognition)
Language used - Python 3
Libraries used - darkflow, tensorflow, matplotlib (data labelling), OpenCV 2(rendering video, labelling data), google-images-download(data collection)
Model used - YOLO v2 tiny
Original model weights and configuration can be found here - https://pjreddie.com/darknet/yolov2/
API used to fine-tune/test/deploy model along with detailed instructions to train custom model - https://github.com/thtrieu/darkflow
Google-images-download - https://github.com/hardikvasa/google-images-download

The DarkFlow library was used as the documentation for TensorFlow's object detection API is scarce and scattered all over the internet.
TensorFlow's API does provide a guide to setup the model but there is no how-to which tells how to train/test/deploy a custom model.

Role of Machine Learning
Multiple models for the crop will be trained as per requirement of the crop.
So for tomato we will be training 3 models. 
One will recognise tomatoes in general,
One will recognise visibly fresh tomatoes
One will recognise visibly rotten/bad tomatoes
Each of the three models will be used to count what they recognise during loading of crop batch which will determine the quality of the batch
1 - Batch quality = ( no. of visible bad tomatoes / total number of tomatoes ) * 100

The model which recognises rotten tomatoes will be uploaded to the embedded system and will be given sufficient computational power to run in real time
As soon as the model recognises a bad tomato, the frame along with the bounding box enclosing the tomato will be pushed into the blockchain.



## Limitations
For each crop more than 1 model has to be fine-tuned/trained, tested and deployed.
This totally depends on the cooperation of the transportation company. Any tampering with the hardware will be reported back to us.
In case the hardware is damaged we will have to take full responsibility and repair it in time.
In case of evidence of any tampering, the transportation company will be held liable for it.
For every crop yield the quality of the crop is determined differently so the tech stack has to be finely tuned to match that crop’s needs. Also if multiple crops are being transported in the same vehicle, we will have to fit multiple sets of our technology.


## Future Aspects
Can be used to judge driver performance.
The IoT system deployed can be used to warn the driver of any and all mishaps such as the cargo door opening up during commute
Can be expanded to other perishable items such as volatile chemicals.
Will help set a standard and enforce it across all transportation companies.
Can be expanded to a transportation company of its own.


## github project link

## Contact info ( emailid - github id )

tanmaybhatnagar84976@gmail.com - github.com/tanmay-bhatnagar
anshgujral1997@gmail.com - github.com/gujral1997
tathagat.thapliyal@gmail.com - github.com/tathagat2006
