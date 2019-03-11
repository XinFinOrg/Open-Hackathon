# Open Hackathon

## VISION

To innovate and replace existing non-efficient closed systems with more transparent, efficient system using XinFin blockchain.

## NOTES
Participants are given complete freedom for choosing technology, programming languages etc. in the development of the application.

## Submission Guidelines
 [Submission Guidelines](./SubmissionGuide).

## Open Problem Statements

Below we have listed the problem statements which are open to all. In order to participate, create a proposal in the format specified & make a pull request.

## Problem Statement 1: Optimize delegated proof of stake (DPoS) consensus

In DPoS, Restriction numbers of node make its more centralized while large number of nodes makes the system very slow.
We are proposing Optimization in DPoS consensus. XinFin DPoS Development progress detail at: https://xinfin.org/dpos_tech_brief.php  

### Consensus Related References

a. POS- Proof Of Stake
  * [Parity Tech Aura - Authority Round](https://wiki.parity.io/Aura)
  * [XDPOS](https://github.com/riteshkakkad/XDPOS).
  * [EOS](https://github.com/EOSIO).
  * [TRON](https://github.com/tronprotocol/java-tron).

b. [Ethereum's Proof of Work ( ethash )](https://github.com/ethereum/go-ethereum/tree/master/consensus/ethash).

c. [Ethereum's Proof of Authority ( clique )](https://github.com/ethereum/go-ethereum/tree/master/consensus/clique).

d. [Ethereum's Proof of Stake ( casper )](https://github.com/ethereum/casper).

e. [Proof of Stake-Velocity ( POSV )](https://github.com/tomochain/tomochain).

f. [Comparision ( POSV vs Clique )](./Comparision_POSV_Clique.html).

g. [Smart contracts for PoS ](https://github.com/poanetwork/pos-contracts).

### Blockchain Related References

a. [XinFin-Network Stats, Wallet](https://XinFin.Network).

b. [How to Setup XinFin Node](https://xinfin.org/setup-masternode.php).

c. [XinFin Developer Resource](https://docs.xinfin.org/).

d. [XinFin Other Resource](https://xinfin.org/resources.php).

e. [Ethereum](https://github.com/ethereum/go-ethereum).

f. [Bitcoin](https://github.com/bitcoin/bitcoin).


## Problem Statement 2: Cross Blockchain Interoperability of XinFin Network with R3 Corda Network

As a R3 Corda Partner XinFin going to provide bridge to access public state on XinFin Blockchain to R3 consortium of over 200+ financial institutions. We need to Create Bridge between XinFin Network and R3 Corda. This will create the ability to relay R3 Corda a limited set of data and transactions from privacy channels to the XinFin public network.

### At the time of development of bridge keep below mentioned Standard:
a. [ISO20022 Data Standard](https://www.iso20022.org/sites/default/files/documents/general/ISO20022_API_JSON_Whitepaper_Final_20180129.pdf).

b. [ERP data Standard](https://www.programmableweb.com/category/erp/api).

c. [Open Banking Standard](https://openbanking.atlassian.net/wiki/spaces/DZ/pages/16320694/Open+Data+API+Specifications).

d. [SWIFT Data Standard](https://www.swift.com/our-solutions/interfaces-and-integration/swift-apis).

### XinFin and R3 Corda Blockchain References

a. [XinFin-Network Stats, Wallet](https://XinFin.Network).

b. [How to Setup XinFin Node](https://xinfin.org/setup-masternode.php).

c. [XinFin Developer Resource](https://docs.xinfin.org/).

d. [XinFin Other Resource](https://xinfin.org/resources.php).

e. [R3 Corda Github](https://github.com/corda/corda).

f. [R3 Corda Developer Resource](https://docs.corda.net/).

### Corda-XinFin Bridge Functionality

The Relayer Bridge deploys [ Corda Smart ContractState](https://docs.corda.net/api-states.html#api-states) —>[Onto]-> XinFin Network Smart Contract State (ContractInstance)

Functionalities are:
- Contract Creation (with function support "isBurnable", "isUpgradeable", "isPausable") and create Transaction Hash
- Atomic Swap (Include Hash of the transaction)
- ContractStatus, Token Transfer Events and Event Logs
- Hide Transactions Details (Needs Pre-compiled contract on EVM)

### Blockchain Interoperability References

a. [Parity-Bridge](https://github.com/paritytech/parity-bridge).

b. [Peace Bridge is an ETC-ETH bridge](https://github.com/YZhenY/peaceNotRelay).

c. [BTCRelay](https://github.com/ethereum/btcrelay).

### Blockchain Interoperability References

a. [Parity-Bridge](https://github.com/paritytech/parity-bridge).

b. [Peace Bridge is an ETC-ETH bridge](https://github.com/YZhenY/peaceNotRelay).

c. [BTCRelay](https://github.com/ethereum/btcrelay).

## For Hackathons / Query

Join our [Public Slack Group](https://launchpass.com/xinfin-public) or Join our [Telegram Developer Group](https://t.me/XinFinDevelopers) for any technical Development related Issue.


## Problem Statement 3 : XDCE Token Staking Function.

A staking mechanism requires users who offer compute power or other resources to the service takers in the ecosystem to put up a portion of their tokens in order to do so. If a user has no tokens to stake, but wants to support the network by providing resources they must purchase them. In exchange for staking their tokens and providing the service a financial reward is received. By forcing providers to take a financial risk you are weeding out bad actors.

Read more detailed requirement [here](https://github.com/XinFinOrg/Hackathon/blob/master/OpenHackathon/XDCE_Staking_Function.md)

### DAPPS Related References

1. [Boilerplate DAPP](https://github.com/XinFinOrg/dapp-boilerplate).

2. [Dapp tutorial](https://docs.google.com/presentation/d/1XKhsEttbsRbdIouG65KWarMLmQDvJQDWIAywfQ4aNCE/edit?usp=sharing).

### Solidity Related References
1. [Solidity docs](https://docs.google.com/presentation/d/1NH98mdt3LgzpbR-tI_jkpFSkBq0KUwZ-8wQ1xNC4qRg/edit?usp=sharing).


## For Hackathons

Below are the links to the specific problem statements for previously held hackathons. Join our [Public Slack Group](https://launchpass.com/xinfin-public) to stay updated with ongoing XinFin events.

* [SPIT Hackathon](./SPIT/ReadMe.md).
* [Hackference](./Hackference-2018/ReadMe.md).
* [Standford University-TreeHacks](./Standford-University-TreeHacks/README.md).

## Contacting Us

Join our [Telegram Developer Group](https://t.me/XinFinDevelopers) and put up your queries. We would love to answer your questions.

You can also join our [Public Slack Group](https://launchpass.com/xinfin-public). Enter your E-mail ID and you will get an invite to our slack.
