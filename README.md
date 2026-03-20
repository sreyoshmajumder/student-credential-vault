# Decentralized Student Credential Vault

A full-stack Web3 dApp that lets colleges issue tamper‑proof degree, internship, and certificate credentials on the blockchain, and allows employers to instantly verify them without contacting the institution.

---

## 🎯 Problem

Traditional credential verification is:

- Slow – HR teams wait days or weeks for universities to respond.
- Manual – emails, phone calls, and stamped PDFs.
- Easy to fake – edited PDFs and forged mark sheets are hard to detect.
- Painful for students – repeated attestations and notarizations for every application.

---

## ✅ Solution

This dApp stores credential proofs on a public blockchain:

- Colleges issue credentials on‑chain via a simple UI.
- Each credential gets a unique on‑chain ID.
- Employers (or anyone) can verify a credential by ID in seconds.
- Data is transparent and tamper‑evident thanks to the blockchain.

---

## 🏗️ Architecture

- **Smart Contract**: Solidity contract `StudentCredential.sol`
  - Owner (college) can issue credentials.
  - Credentials stored with student name, ID, year, field of study, and type.
  - Public functions:
    - `issueCredential(...)`
    - `verifyCredential(uint256 id) view returns (bool)`
    - `getCredential(uint256 id) view returns (...)`
    - `credentialCount() view returns (uint256)`

- **Frontend**: React + ethers.js
  - Connects to MetaMask.
  - “College Administrator” view to issue credentials.
  - “Employer” view to verify and read credential details.
  - Network: Sepolia testnet (configurable).

---

## 🧰 Tech Stack

- **Blockchain**: Solidity, Ethereum Sepolia testnet
- **Frontend**: React, JavaScript, CSS
- **Wallet**: MetaMask
- **Library**: ethers.js

---

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS)
- npm or yarn
- MetaMask browser extension
- A deployed `StudentCredential` contract address on Sepolia

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/student-credential-vault.git
cd student-credential-vault
