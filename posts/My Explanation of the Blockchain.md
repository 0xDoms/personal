# My Explanation of the Blockchain

I’ve recently started learning **Solidity**, and to really grasp how it works and its use cases, I needed to dive into **blockchain technology**. With all the buzz about **decentralization**, I always find it helpful to have a visual and a deeper understanding of how it genuinely works. So, I figured the best way to learn is by teaching others while I’m at it!

I’m going to use [Anders Brownworth's](https://andersbrownworth.com/blockchain/) website to help visualize the process. I believe it’s a fantastic resource for self-teaching. Just like Anders has broken down the concepts of blockchain into pages on his site, I’ll do my best to explain it in a similar way.

## Hashing

**Hashing** is a critical part of the process, used to determine the legitimacy of transactions and to check whether a transaction has been tampered with. **Anders** has provided us with **SHA-256**, a hashing algorithm that produces a **256-bit hash** completely unique to its input data. No two hashes will be the same if the input data is different. SHA-256 is just one of many hashing algorithms; for example, **Ethereum** uses **Keccak-256**.

### Utility of Hashing

Hashing acts as a signature for the data. When you input data into the hashing algorithm, it produces a unique hash that is linked solely to that data. If anything is changed, a completely new hash will be generated. This is similar to how [**PGP signatures**](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) work. For instance, when I input the word "blockchain," I receive the hash:
However, if I change the input by capitalizing a letter, I get a completely different hash:
This demonstrates that even minor changes in the data lead to a new hash.
### ### Utility of Hashing

Hashing acts as a signature for the data. When you input data into the hashing algorithm, it produces a unique hash that is linked solely to that data. If anything is changed, a completely new hash will be generated. This is similar to how [**PGP signatures**](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) work. For instance, when I input the word **"blockchain,"** I receive the hash:  
**ef7797e13d3a75526946a3bcf00daec9fc9c9c4d51ddc7cc5df888f74dd434d1**  
However, if I change the input by capitalizing a letter, I get a completely different hash:  
**06ff9e898ca7100b33e69d9a0702956927e958ec579c74be3b29ad0977c4d4d2**  
This demonstrates that even minor changes in the data lead to a new hash.

## Blocks

You’ve definitely heard of blocks when learning about blockchain, but you may not fully understand what a block actually is. A block is quite simple; it is essentially a container for data. Each block consists of multiple fields, including the **Block Number**, **Nonce**, and **Data**, which collectively contribute to the block's hash. While other information can be added, I'll keep this rudimentary.

### Block Number

The **Block Number** serves as a unique identifier for each block in the blockchain. It indicates the position of the block in the sequence, allowing for easy navigation and reference within the chain. This numbering system is crucial for maintaining the integrity of the blockchain, as it helps ensure that blocks are added in the correct order and prevents any alterations to the sequence.

### Nonce

The **Nonce** (short for "number used once") is a vital component in the mining process of a blockchain. It is a random number that miners manipulate to generate a valid hash for the block. By varying the nonce, miners attempt to find a hash that meets the network’s difficulty target. Once a valid hash is found, the block can be added to the blockchain, and the miner is rewarded for their effort. This process is essential for maintaining the security and consensus of the network.

### Data

The **Data** field contains the actual information that the block is intended to store. This could include transaction details, timestamps, or any relevant data that needs to be recorded. The data in the block is what makes it valuable, as it represents the transactions and interactions that occur within the blockchain. Once this data is confirmed and added to the block, it becomes **immutable**, meaning it cannot be altered without the consensus of the network.

## Blockchain

How do blocks create a blockchain, and how are they validated to ensure there’s no tampering within the chain? First, let’s look at a single blockchain.

### Mining

**Mining** is the process by which new blocks are added to the blockchain. Miners use computational power to solve complex mathematical problems that validate transactions and create new blocks. This process involves finding a nonce that, when hashed with the block's data, produces a hash that meets the network’s difficulty target. Once a miner successfully finds this valid hash, the new block is added to the blockchain, and the miner is rewarded with cryptocurrency. Mining not only creates new blocks but also secures the network by making it costly and time-consuming to alter any block’s data.

### Validity

To ensure the integrity of the blockchain, each new block’s hash must match the hash of the previous block. This creates a chain of blocks that are cryptographically linked to each other. If even a small change occurs in any block, it will produce a different hash, breaking the chain and alerting the network to potential tampering. This linkage ensures that all participants in the network can verify the validity of the blockchain and that no unauthorized changes have been made to the data.

### 51% Attack

A **51% attack** is a potential attack vector where a single entity gains control of more than 50% of the network’s hashing power. This could allow the attacker to manipulate the blockchain by reversing transactions, preventing new transactions from gaining confirmations, or double-spending coins. However, the distributed nature of most blockchains makes such an attack very difficult to achieve. In a well-distributed network, the cost of acquiring more than half of the total hashing power would be prohibitively high. Furthermore, the integrity and security of the blockchain are maintained by the consensus mechanism, which requires agreement from the majority of nodes, significantly reducing the likelihood of a successful 51% attack.

## Distributed Blockchain

The **distributed nature** of blockchains is what provides them with significant trust and validity. Having multiple peers with copies of the blockchain allows for cross-referencing various transactions and data points. This redundancy ensures that if a peer has an invalid block, it can be easily identified, thereby enhancing security and maintaining the integrity of the entire network.

## Distributed Example

Consider three peers in the network: **Peer A**, **Peer B**, and **Peer C**. Let’s say Peer A has changed the data in their copy of the blockchain, perhaps altering a transaction to their benefit. When Peer B and Peer C compare their copies of the blockchain, they will see that the data in Peer A’s block does not match the consensus. Since both Peer B and Peer C have the correct information, they form the majority. As a result, they can declare Peer A's block as invalid, reinforcing the security of the network and ensuring that only verified data remains in the blockchain.

## Majority Rules

In a distributed blockchain network, the principle of **majority rules** is vital for maintaining consensus. Decisions about the validity of transactions or blocks are based on what the majority of peers agree upon. If most peers in the network have a consistent version of the blockchain, any discrepancies—such as those introduced by a single peer attempting to alter data—are quickly flagged. This democratic approach to validation prevents fraud and manipulation, ensuring that the blockchain remains a reliable record of transactions.