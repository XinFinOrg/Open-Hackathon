##   Setting up private blockchain

1.  Compile geth by cloning the following link: https://github.com/ethereum/go-ethereum

2.  Define the genesis file:
Save this genesis as genesis.json file in a folder name: xyz

```
{
    "config": {
        "chainId": 2402,
        "homesteadBlock": 0,
        "eip155Block": 0,
        "eip158Block": 0
    },
    "difficulty": "200",
    "gasLimit": "2100000",
    "alloc": {
    }
}
```

3  Initialize the genesis file:
```
geth --datadir filename init genesis.json
```
4  Starting the node:
```
geth  --datadir ./dd --networkid 2402 --rpc --rpcaddr 0.0.0.0 --rpcport 8545 --rpcapi db,net,web3,admin,eth,miner,personal --rpccorsdomain "*"
```

***Note:*** chain id should be same in genesis file as well in the start commant also the filename


5 Attach geth on a new console:
```
geth attach ipc:http://0.0.0.0:8545

```

It will show you javasript console for interaction, and you can access blockchain. 
