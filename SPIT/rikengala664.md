# Project Name
Proof-of-Pots

## Description
Proof-of-Pots comprises of two hierarchical structures - delegates and composers.

Delegates are entities that forge blocks on to the Blockchain by maintaining general consensus. Delegates are similar, in some aspects, to Validators or Master-nodes in other types of Blockchains. 

Composers are participants able to execute transactions and store data on the Blockchain. They vote to choose their Delegate who they want as the forger for their data. However, the identity of the delegates remains anonymous at the same time. In addition to the data they want to put in the Blockchain, every individual composer also provides their stake, which, in case is greater than 30% of the total stake, is limited to 30% of total, and the rest is returned to the composer. The reward earned by a composer is directly proportional to the stake they own in the final pot.

Data Flow:
1.	A composer, who wishes to enter some data in the Blockchain, joins the networks of composers and delegates by first staking some of his tokens in the pot.
2.	He then enters the data he wishes to put in the Blockchain. After this, he casts a blind vote to select a delegate from the current pool of delegates which is anonymous to him.
3.	Now, he waits till the time interval of 30 seconds is complete. This time interval gives his co-composers the opportunity to add their own data, stake and cast a blind vote for their delegate. 
4.	Once the 30 second interval has elapsed, the delegate with the highest votes is chosen as the forger. 
5.	The data from all the composers is compiled and sent to the forgers. The selected forger then makes the block. Hence, this block contains the data from all the composers.
6.	Once the block is generated, the chain is validated by the other delegates in the current pool making sure that the forger does not perform any malicious act. The block is then appended on to the chain.
7.	At the end of this, the forger gets 25% of the reward for forging the block successfully. 75% of the reward is then split amongst the composers by dividing it depending upon the stake each composer has put in.
8.	The above process is repeated every time a composer wishes to add data.
9.	A new list of “current delegates” is prepared from the pool of all delegates to give them a chance to forge blocks after a certain amount of time.



## Functions
-	To reduce the problem of bribing of the voters by the delegators as they are selected by random algorithm in our protocol.
-	Resting the power of choosing the delegates into the hands of composers, thereby maintaining anonymity and thus, reducing the dominance of the delegates in the network.  
-	To diminish the extent to which rich gets richer thereby giving equal opportunities to all.
-	To make the forging process quicker. This is done by having only a few trusted nodes who do the forging, as compared to PoS and PoW, where everyone tries to forge or mine a block.
-	To make sure that having expensive mining equipment does not give more advantage to that person. This keeps the blockchain fair for all, irrespective of wealth.
-	To reduce energy consumption as compared to PoW implementations.

## Use case diagram link
Stake distribution: https://ibb.co/DRM7crL
Data flow: https://drive.google.com/file/d/12LoWMoj4O9MDFIKRJv3UkZYPpOJ9zxKb/view

## Technology stack / technology used ( Very Detailed )
-	Languages: 
GOLang – to write the algorithm and create a network of nodes (as users) to demonstrate the protocol on a machine’s terminal.

## Limitations
-	Rich gets richer problem, though at a lesser extent, still exists.
-	Sufficient decentralization cannot be achieved.

## Future Aspects
-	Implement KYC to know and verify the potential delegates before they enter the system. This will keep them from performing any malicious activities as they will have a risk of permanent ban from the network. This will make sure the rich do not get richer and decentralize the network even further.
-	Making the amount of reward and its distribution to benefit all the composers by using advance probabilistic methods. This will make the reward dynamic and make sure that the value of the currency does not dilute on the market.

## github project link
https://github.com/rikengala/SPIT-Hackathon-POT

## Contact info ( emailid - github id )
-	Riken Gala (rikengala@gmail.com, https://github.com/rikengala )
-	Aadit Kachalia (aaditkachalia@gmail.com, https://github.com/aaditkachalia )
-	Apurva Dani (apurvadani@gmail.com, https://github.com/ApurvaDani )
-	Rohan Kalantri (kalantri.rohan@gmail.com, https://github.com/rohankalantri ) 
