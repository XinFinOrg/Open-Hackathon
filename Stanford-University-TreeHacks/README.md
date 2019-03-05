# Treehacks at Stanford University

## NOTES
Participants are given complete freedom for choosing technology, programming languages etc. in the development of the application.

## Submission Guidelines
 [Submission Guidelines](https://github.com/XinFinOrg/Open-Hackathon/tree/master/SubmissionGuide).
 
## Problem Statement: Cross Blockchain Interoperability of XinFin Network with R3 Corda network.

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

## For Hackathons

Below are the links to the specific problem statements for previously held hackathons. Join our [Public Slack Group](https://launchpass.com/xinfin-public) to stay updated with ongoing XinFin events.

* [SPIT Hackathon](./SPIT/ReadMe.md).
* [Hackference](./Hackference-2018/ReadMe.md).


## Contacting Us

Join our [Telegram Developer Group](https://t.me/XinFinDevelopers) and put up your queries. We would love to answer your questions.

You can also join our [Public Slack Group](https://launchpass.com/xinfin-public). Enter your E-mail ID and you will get an invite to our slack.
