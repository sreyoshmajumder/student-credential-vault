<!-- HEADER BANNER -->
<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=0:1a0a3e,40:2d1b69,70:4a1a8a,100:1a0a3e&height=260&section=header&text=🔐%20Student%20Credential%20Vault&fontSize=38&fontColor=e9d5ff&fontAlignY=40&desc=Decentralized%20Credential%20Issuance%20%26%20Verification%20on%20Ethereum%20%7C%20Solidity%20%2B%20React%20%2B%20ethers.js&descAlignY=63&descColor=c4b5fd&animation=fadeIn)

<br/>

[![Solidity](https://img.shields.io/badge/Solidity-0.8.x-6d28d9?style=for-the-badge&logo=solidity&logoColor=white)](https://soliditylang.org)
[![Ethereum](https://img.shields.io/badge/Ethereum-Sepolia%20Testnet-3730a3?style=for-the-badge&logo=ethereum&logoColor=white)](https://ethereum.org)
[![React](https://img.shields.io/badge/React-18.2-0ea5e9?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![ethers.js](https://img.shields.io/badge/ethers.js-v6.16-7c3aed?style=for-the-badge&logo=ethereum&logoColor=white)](https://ethers.org)
[![MetaMask](https://img.shields.io/badge/MetaMask-Wallet-e97316?style=for-the-badge&logo=metamask&logoColor=white)](https://metamask.io)
[![Web3](https://img.shields.io/badge/Web3-dApp-8b5cf6?style=for-the-badge&logo=web3dotjs&logoColor=white)](https://web3js.readthedocs.io)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge&logoColor=white)](LICENSE)

<br/>

> **🔐 A full-stack Web3 decentralized application that puts academic credentials on the Ethereum blockchain — colleges issue tamper-proof degrees, internship certificates, and awards on-chain, while employers and institutions verify them instantly in seconds using a unique credential ID. No middlemen. No waiting. No fakes.**

<br/>

![Chain](https://img.shields.io/badge/Blockchain-Ethereum%20Sepolia-a855f7?style=flat-square&labelColor=4c1d95)
![Contract](https://img.shields.io/badge/Smart%20Contract-StudentCredential.sol-7c3aed?style=flat-square&labelColor=312e81)
![Roles](https://img.shields.io/badge/Roles-College%20%7C%20Employer%20%7C%20Student-8b5cf6?style=flat-square&labelColor=4c1d95)
![Verify](https://img.shields.io/badge/Verification-Instant%20%26%20Trustless-16a34a?style=flat-square&labelColor=14532d)

</div>

---

## 📋 Table of Contents

| | Section |
|---|---|
| 🎯 | [Problem Statement](#-problem-statement) |
| ✅ | [Solution](#-solution) |
| 🏗️ | [System Architecture](#-system-architecture) |
| 🔗 | [Blockchain Architecture](#-blockchain-architecture) |
| 📜 | [Smart Contract Deep-Dive](#-smart-contract-deep-dive) |
| 🔄 | [Complete Transaction Flow](#-complete-transaction-flow) |
| 👥 | [Three Actor Model](#-three-actor-model) |
| 🌐 | [Frontend Architecture](#-frontend-architecture) |
| ⛓️ | [How Blockchain Ensures Trust](#-how-blockchain-ensures-trust) |
| 🗂️ | [Project Structure](#-project-structure) |
| 🚀 | [Quick Start](#-quick-start) |
| 🔭 | [Roadmap](#-future-roadmap) |

---

## 🎯 Problem Statement

<div align="center">

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   Every year, millions of students face the same painful process:        ║
║                                                                          ║
║   🐢  SLOW         HR teams wait days or weeks for universities to       ║
║                    manually verify credentials via email or phone        ║
║                                                                          ║
║   ✍️   MANUAL       Physical stamp, notarized PDFs, attested copies,    ║
║                    courier deliveries — for every single application     ║
║                                                                          ║
║   🎭  FAKE-ABLE    Edited PDFs, forged mark sheets, and fabricated      ║
║                    certificates are nearly impossible to detect          ║
║                                                                          ║
║   😰  PAINFUL      Students need repeated attestations and expensive     ║
║                    notarizations for every job or visa application       ║
║                                                                          ║
║   💸  EXPENSIVE    Background check companies charge $50–$500 per      ║
║                    verification — paid by employers, billed to students  ║
║                                                                          ║
║   ─────────────────────────────────────────────────────────────────     ║
║                                                                          ║
║   ► Student Credential Vault solves all of this with one transaction.   ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

</div>

---

## ✅ Solution

<div align="center">

```
╔══════════════════════════════════════════════════════════════════════════╗
║                    THE BLOCKCHAIN DIFFERENCE                             ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║  OLD WAY (Centralized)           NEW WAY (Decentralized)                ║
║  ─────────────────────────       ──────────────────────────────         ║
║  📧 Email university HR          ⛓️  Query smart contract               ║
║  ⏳ Wait 3–14 business days      ⚡ Result in < 1 second                ║
║  📞 Phone call to registrar      🔢 Enter credential ID in browser      ║
║  💵 Pay verification fee         🆓 Free — on-chain reads cost $0       ║
║  🎭 Still might be fake          ✅ Cryptographically unforgeable        ║
║  🗃️  Data stored in one place    🌐 Data on 10,000+ nodes globally      ║
║                                                                          ║
║  College issues credential on-chain  →  immutable hash stored forever  ║
║  Student gets a unique credential ID → shares with anyone               ║
║  Employer enters ID in the dApp      → verified instantly, trustlessly  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

</div>

---

## 🏗️ System Architecture

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║              STUDENT CREDENTIAL VAULT — FULL SYSTEM ARCHITECTURE             ║
╚═══════════════════════════════════════════════════════════════════════════════╝

  ┌──────────────────────────────────────────────────────────────────────────┐
  │                    REACT FRONTEND (react-scripts 5.0.1)                  │
  │                         http://localhost:3000                            │
  │                                                                          │
  │  ┌─────────────────────────┐    ┌─────────────────────────────────────┐ │
  │  │   COLLEGE ADMIN VIEW    │    │         EMPLOYER VIEW               │ │
  │  │                         │    │                                     │ │
  │  │  Issue Credential Form: │    │  Verify Credential Form:            │ │
  │  │  • Student Name         │    │  • Enter Credential ID              │ │
  │  │  • Student ID           │    │  • Click Verify                     │ │
  │  │  • Year of Graduation   │    │  • See: Valid ✅ / Invalid ❌       │ │
  │  │  • Field of Study       │    │  • View full credential details:    │ │
  │  │  • Credential Type      │    │    name, ID, year, field, type      │ │
  │  │  • [Issue on Chain] btn │    │                                     │ │
  │  └──────────────┬──────────┘    └──────────────────┬──────────────────┘ │
  │                 │                                   │                    │
  │         MetaMask signs                      ethers.js reads              │
  │         transaction                         (no gas, free)               │
  └─────────────────┼───────────────────────────────────┼────────────────────┘
                    │                                   │
                    ▼  ethers.js v6.16                  ▼
  ┌──────────────────────────────────────────────────────────────────────────┐
  │                    METAMASK WALLET (Browser Extension)                   │
  │                                                                          │
  │  window.ethereum provider                                                │
  │  ├── BrowserProvider(window.ethereum)  → connect wallet                 │
  │  ├── provider.getSigner()              → college's Ethereum account     │
  │  └── Signs transaction with private key before broadcasting             │
  └──────────────────────────────────────────────────────────────────────────┘
                    │  Signed Transaction
                    ▼
  ┌──────────────────────────────────────────────────────────────────────────┐
  │                 ETHEREUM SEPOLIA TESTNET                                 │
  │                                                                          │
  │   Deployed Contract: StudentCredential.sol                              │
  │   ┌──────────────────────────────────────────────────────────────────┐  │
  │   │  State: mapping(uint256 => Credential) credentials               │  │
  │   │  State: uint256 public credentialCount                           │  │
  │   │  State: address public owner  (college deployer)                 │  │
  │   │                                                                  │  │
  │   │  issueCredential(name, studentId, year, field, type)            │  │
  │   │    ← onlyOwner modifier: only college can issue                 │  │
  │   │    ← Increments credentialCount                                  │  │
  │   │    ← Stores Credential struct on-chain                           │  │
  │   │    ← Emits CredentialIssued event                                │  │
  │   │                                                                  │  │
  │   │  verifyCredential(uint256 id) view returns (bool)               │  │
  │   │    ← Public: anyone can call for free                            │  │
  │   │    ← Returns true if credential exists                           │  │
  │   │                                                                  │  │
  │   │  getCredential(uint256 id) view returns (Credential)            │  │
  │   │    ← Returns full credential struct                              │  │
  │   │    ← Public read: zero gas cost                                  │  │
  │   │                                                                  │  │
  │   │  credentialCount() view returns (uint256)                       │  │
  │   │    ← Total credentials issued so far                             │  │
  │   └──────────────────────────────────────────────────────────────────┘  │
  │                                                                          │
  │   Consensus: Proof-of-Stake (Ethereum post-Merge)                       │
  │   Data replicated across 10,000+ global nodes                           │
  │   Immutable: once written, cannot be altered or deleted                 │
  └──────────────────────────────────────────────────────────────────────────┘
```

---

## 🔗 Blockchain Architecture

```
  WHY ETHEREUM + SOLIDITY?
  ════════════════════════════════════════════════════════════════════════

  ┌──────────────────────────────────────────────────────────────────────┐
  │                    ETHEREUM BLOCKCHAIN                               │
  │                                                                      │
  │   Block N-1          Block N           Block N+1                    │
  │   ┌──────────┐      ┌──────────┐      ┌──────────┐                 │
  │   │ hash:0x.a│◀─────│ hash:0x.b│◀─────│ hash:0x.c│                 │
  │   │          │      │          │      │          │                 │
  │   │ txns:    │      │ txns:    │      │ txns:    │                 │
  │   │ ...      │      │ Issue    │      │ ...      │                 │
  │   │          │      │ Cred #42 │      │          │                 │
  │   └──────────┘      └──────────┘      └──────────┘                 │
  │                                                                      │
  │   ► Every issued credential is permanently embedded in a block       │
  │   ► Altering it would require re-mining all subsequent blocks        │
  │   ► Computationally impossible on a live network                    │
  └──────────────────────────────────────────────────────────────────────┘

  ON-CHAIN vs OFF-CHAIN DATA:
  ──────────────────────────────────────────────────────────────────────
  ON-CHAIN (stored in smart contract state — permanent, tamper-proof):
  ✅  Credential ID (auto-incremented uint256)
  ✅  Student name, student ID, graduation year
  ✅  Field of study, credential type
  ✅  Issuing wallet address (college's Ethereum address)
  ✅  Block timestamp of issuance

  OFF-CHAIN (handled by frontend only):
  ℹ️   UI forms and display
  ℹ️   Wallet connection state
  ℹ️   Local loading/error states

  GAS COSTS:
  ──────────────────────────────────────────────────────────────────────
  issueCredential() → WRITE transaction → costs gas (paid by college)
                   → ~50,000–80,000 gas per credential
                   → On Sepolia testnet: FREE (testnet ETH from faucet)
                   → On mainnet: ~$2–$10 per credential (varies by gas price)

  verifyCredential() → READ call → costs ZERO gas (view function)
  getCredential()    → READ call → costs ZERO gas (view function)
  credentialCount()  → READ call → costs ZERO gas (view function)
```

---

## 📜 Smart Contract Deep-Dive

### `StudentCredential.sol` — Full Interface

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentCredential {

    // ─── State Variables ────────────────────────────────────────────
    address public owner;           // College deployer — only one who can issue
    uint256 public credentialCount; // Auto-increments with each issuance

    // ─── Data Structure ─────────────────────────────────────────────
    struct Credential {
        uint256 id;             // Unique on-chain identifier (1, 2, 3, ...)
        string  studentName;    // Full name of the student
        string  studentId;      // College roll number / enrollment ID
        uint256 year;           // Year of graduation / completion
        string  fieldOfStudy;   // e.g., "Computer Science", "MBA"
        string  credentialType; // "Degree" | "Internship" | "Certificate" | "Award"
        bool    isValid;        // Always true when issued; can be revoked
    }

    // ─── Storage ─────────────────────────────────────────────────────
    mapping(uint256 => Credential) private credentials;
    //         │                          └── Credential data
    //         └── credentialId (1-indexed)

    // ─── Events ──────────────────────────────────────────────────────
    event CredentialIssued(
        uint256 indexed id,
        string  studentName,
        string  studentId,
        string  credentialType
    );
    // Emitted on every successful issuance
    // Indexed id allows efficient on-chain event filtering

    // ─── Modifiers ────────────────────────────────────────────────────
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the college can issue credentials");
        _;
    }
    // Any non-owner calling issueCredential() gets: transaction reverted

    // ─── Constructor ──────────────────────────────────────────────────
    constructor() {
        owner = msg.sender; // College wallet = contract deployer
    }

    // ─── Write Functions (cost gas) ───────────────────────────────────
    function issueCredential(
        string memory _studentName,
        string memory _studentId,
        uint256       _year,
        string memory _fieldOfStudy,
        string memory _credentialType
    ) public onlyOwner {
        credentialCount++;
        credentials[credentialCount] = Credential({
            id:             credentialCount,
            studentName:    _studentName,
            studentId:      _studentId,
            year:           _year,
            fieldOfStudy:   _fieldOfStudy,
            credentialType: _credentialType,
            isValid:        true
        });
        emit CredentialIssued(credentialCount, _studentName, _studentId, _credentialType);
    }

    // ─── Read Functions (zero gas) ────────────────────────────────────
    function verifyCredential(uint256 _id) public view returns (bool) {
        return credentials[_id].isValid;
        // Returns false if ID doesn't exist (default bool = false)
    }

    function getCredential(uint256 _id) public view returns (
        uint256 id,
        string memory studentName,
        string memory studentId,
        uint256 year,
        string memory fieldOfStudy,
        string memory credentialType,
        bool isValid
    ) {
        Credential memory c = credentials[_id];
        return (c.id, c.studentName, c.studentId, c.year,
                c.fieldOfStudy, c.credentialType, c.isValid);
    }

    function credentialCount() public view returns (uint256) {
        return credentialCount;
    }
}
```

### Access Control Matrix

```
  Function              Caller            Cost      Mutates State?
  ──────────────────────────────────────────────────────────────────
  issueCredential()     Owner ONLY        Gas ⛽    Yes — stores Credential
  verifyCredential()    Anyone            FREE 🆓   No  — view only
  getCredential()       Anyone            FREE 🆓   No  — view only
  credentialCount()     Anyone            FREE 🆓   No  — view only

  Non-owner calling issueCredential():
  → Transaction reverted with: "Only the college can issue credentials"
  → Gas fee for failed tx: small (~21,000 gas for revert)
```

---

## 🔄 Complete Transaction Flow

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                   CREDENTIAL ISSUANCE — STEP BY STEP                         ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║  COLLEGE ADMIN                    FRONTEND               BLOCKCHAIN           ║
║  ─────────────────  ────────────────────────────  ──────────────────────     ║
║                                                                               ║
║  [1] Open dApp in browser                                                    ║
║      └──▶  window.ethereum detected                                         ║
║                                                                               ║
║  [2] Click "Connect Wallet"                                                  ║
║      └──▶  MetaMask popup: "Allow site to connect?"                         ║
║      └──▶  College approves → provider.getSigner() returns college wallet   ║
║                                                                               ║
║  [3] Fill in credential form:                                                ║
║      Student Name:  "Sreyosh Majumder"                                       ║
║      Student ID:    "CS2021001"                                              ║
║      Year:          2024                                                     ║
║      Field:         "Computer Science"                                       ║
║      Type:          "Degree"                                                 ║
║                                                                               ║
║  [4] Click "Issue Credential"                                                ║
║      └──▶  ethers.js builds transaction:                                    ║
║            contract.issueCredential(name, id, year, field, type)            ║
║                                                                               ║
║  [5] MetaMask gas estimation popup:                                          ║
║      "Confirm Transaction — ~60,000 gas (~0.001 SepoliaETH)"                ║
║      College clicks CONFIRM                                                  ║
║                                                                               ║
║  [6] Transaction broadcast to Ethereum Sepolia P2P network                   ║
║      └──▶  Mempool: pending txn hash: 0xabc123...                           ║
║                                                                               ║
║  [7] Block mined — transaction included                                      ║
║      └──▶  EVM executes issueCredential()                                   ║
║      └──▶  credentialCount++ → now = 42                                    ║
║      └──▶  credentials[42] = Credential{...}  ← stored permanently         ║
║      └──▶  CredentialIssued event emitted                                   ║
║                                                                               ║
║  [8] Transaction receipt received by frontend                                ║
║      └──▶  UI shows: "✅ Credential issued! ID: 42"                        ║
║      └──▶  Student receives credential ID: 42                               ║
║                                                                               ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                   CREDENTIAL VERIFICATION — STEP BY STEP                     ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║  EMPLOYER                         FRONTEND               BLOCKCHAIN           ║
║  ─────────────────  ────────────────────────────  ──────────────────────     ║
║                                                                               ║
║  [1] Open dApp → switch to "Employer Verify" tab                             ║
║      └──▶  No wallet connection needed (read-only)                          ║
║                                                                               ║
║  [2] Enter Credential ID: 42                                                 ║
║      Click "Verify"                                                          ║
║                                                                               ║
║  [3] ethers.js sends read call (no transaction):                             ║
║      contract.verifyCredential(42)  → returns: true                        ║
║      contract.getCredential(42)     → returns: full struct                  ║
║                                                                               ║
║  [4] UI renders result instantly:                                            ║
║      ✅  VALID CREDENTIAL                                                    ║
║      ──────────────────────────────────────────                              ║
║      Student Name:   Sreyosh Majumder                                        ║
║      Student ID:     CS2021001                                               ║
║      Year:           2024                                                    ║
║      Field of Study: Computer Science                                        ║
║      Type:           Degree                                                  ║
║                                                                               ║
║  [5] Invalid ID entered (e.g., 9999):                                       ║
║      verifyCredential(9999) → returns: false                                ║
║      UI renders: ❌  CREDENTIAL NOT FOUND                                   ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

---

## 👥 Three Actor Model

```
  THE THREE ROLES IN THE ECOSYSTEM
  ════════════════════════════════════════════════════════════════════════

  ┌──────────────────────────────────────────────────────────────────────┐
  │  🏫  COLLEGE / INSTITUTION  (Contract Owner)                         │
  │                                                                      │
  │  Identity:  The Ethereum wallet that deployed the contract           │
  │  Access:    Only account that can call issueCredential()             │
  │             (enforced by onlyOwner modifier — cannot be bypassed)    │
  │                                                                      │
  │  Actions:                                                            │
  │  1. Deploy StudentCredential.sol to Sepolia testnet                 │
  │  2. Save the deployed contract address                               │
  │  3. Connect MetaMask (college wallet)                               │
  │  4. Issue credentials for graduating students                        │
  │  5. Each issuance costs gas (testnet = free, mainnet = ~$2–10)     │
  └──────────────────────────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────────────────────────┐
  │  🎓  STUDENT                                                         │
  │                                                                      │
  │  Identity:  Not stored on-chain directly (only name + ID string)    │
  │  Access:    No wallet needed — they receive their credential ID      │
  │                                                                      │
  │  Actions:                                                            │
  │  1. College issues their credential → they receive ID: 42           │
  │  2. Share ID: 42 on resume, LinkedIn, or job application            │
  │  3. No more attested copies, no more verification letters           │
  │  4. Credential is permanently verifiable — forever                  │
  └──────────────────────────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────────────────────────┐
  │  🏢  EMPLOYER / VERIFIER                                             │
  │                                                                      │
  │  Identity:  Any person — no account needed                          │
  │  Access:    Can call verifyCredential() and getCredential()          │
  │             (public read functions — zero gas)                       │
  │                                                                      │
  │  Actions:                                                            │
  │  1. Open the dApp (no wallet needed for verification)               │
  │  2. Enter credential ID from student's resume                       │
  │  3. Click Verify → instant result from blockchain                   │
  │  4. Cannot fake — blockchain state cannot be tampered with          │
  └──────────────────────────────────────────────────────────────────────┘
```

---

## 🌐 Frontend Architecture

```
  REACT APP (react-scripts 5.0.1 / Create React App)
  ════════════════════════════════════════════════════════════════════════

  src/
  ├── index.js              → ReactDOM.render() entry point
  ├── App.js                → Root component: wallet state + tab switcher
  ├── App.css               → Global styles
  │
  ├── components/
  │   ├── IssueCredential.js    → College admin form
  │   │   ├── Input fields: studentName, studentId, year, field, type
  │   │   ├── contract.issueCredential(...) on submit
  │   │   └── Shows tx hash + credential ID on success
  │   │
  │   ├── VerifyCredential.js   → Employer verification form
  │   │   ├── Input: credential ID number
  │   │   ├── contract.verifyCredential(id) → boolean
  │   │   ├── contract.getCredential(id) → full struct
  │   │   └── Renders: ✅ VALID or ❌ NOT FOUND + full details
  │   │
  │   └── WalletConnect.js      → MetaMask connection button
  │       ├── window.ethereum check (MetaMask installed?)
  │       ├── BrowserProvider(window.ethereum)
  │       ├── provider.getSigner() → signer
  │       └── Shows connected wallet address (truncated)
  │
  └── utils/
      └── contract.js           → ethers.js contract instance
          ├── CONTRACT_ADDRESS = "0x..." (deployed on Sepolia)
          ├── ABI = [...] (issueCredential, verifyCredential, getCredential)
          └── new ethers.Contract(address, abi, signerOrProvider)

  ETHERS.JS v6 PATTERNS:
  ──────────────────────────────────────────────────────────────────────
  // Connect wallet (College Admin)
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  // Issue credential (write — needs signer)
  const tx = await contract.issueCredential(name, id, year, field, type);
  await tx.wait(); // Wait for block confirmation

  // Verify credential (read — just provider, no signer)
  const readContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
  const isValid = await readContract.verifyCredential(credId);
  const details = await readContract.getCredential(credId);

  UI STATE MACHINE:
  ──────────────────────────────────────────────────────────────────────
  walletConnected → false  →  Show "Connect MetaMask" button
                 → true   →  Show college wallet address + Issue form
                             + Employer verify form (no wallet needed)
```

---

## ⛓️ How Blockchain Ensures Trust

```
  WHY THIS IS TAMPER-PROOF
  ════════════════════════════════════════════════════════════════════════

  PROPERTY 1 — IMMUTABILITY
  ──────────────────────────────────────────────────────────────────────
  Once credentials[42] = Credential{...} is written to the chain:
  ✅  Cannot be edited by anyone (including the college)
  ✅  Cannot be deleted by anyone
  ✅  Will exist as long as the Ethereum network exists
  ✅  Visible to every node on the planet simultaneously

  PROPERTY 2 — CRYPTOGRAPHIC OWNERSHIP
  ──────────────────────────────────────────────────────────────────────
  The onlyOwner modifier checks: msg.sender == owner
  owner = the college's Ethereum address (set at deployment)
  This is enforced by ECDSA signature verification — impossible to spoof

  PROPERTY 3 — DETERMINISTIC EXECUTION
  ──────────────────────────────────────────────────────────────────────
  Every Ethereum node re-executes the same smart contract code.
  The result must be identical on all 10,000+ nodes.
  Any node disagreeing is rejected by consensus.

  PROPERTY 4 — PUBLIC AUDITABILITY
  ──────────────────────────────────────────────────────────────────────
  Every issuance transaction is visible on Etherscan:
  https://sepolia.etherscan.io/address/CONTRACT_ADDRESS
  Anyone can audit every credential ever issued — full transparency

  COMPARISON:
  ──────────────────────────────────────────────────────────────────────
  Attack vector          Centralized DB      Blockchain
  ─────────────────────────────────────────────────────
  SQL injection          ❌ Vulnerable        ✅ No DB to inject
  Admin credential theft ❌ Vulnerable        ✅ Wallet = cryptographic key
  Server compromise      ❌ Data exposed      ✅ No single server
  Record modification    ❌ Possible          ✅ Cryptographically impossible
  Service goes offline   ❌ Data unavailable  ✅ Network never stops
```

---

## 🗂️ Project Structure

```
student-credential-vault/
│
├── 📦 package.json              # React 18.2 + ethers.js v6.16 + react-scripts
│
├── 🌐 public/
│   └── index.html               # HTML shell
│
└── 📁 src/                      # App source (81.3% JS, 10.4% CSS, 8.3% HTML)
    │
    ├── index.js                 # ReactDOM entry point
    ├── App.js                   # Root: wallet connection + view switcher
    ├── App.css                  # Global styles (dark blockchain aesthetic)
    │
    ├── 📁 components/
    │   ├── WalletConnect.js     # MetaMask → BrowserProvider → getSigner()
    │   ├── IssueCredential.js   # College admin: form → issueCredential() tx
    │   └── VerifyCredential.js  # Employer: ID input → verifyCredential() read
    │
    ├── 📁 contracts/
    │   └── StudentCredential.sol  # Solidity smart contract (deploy to Sepolia)
    │
    └── 📁 utils/
        └── contract.js          # ethers.Contract instance + ABI + address
```

---

## 🚀 Quick Start

### Prerequisites

```bash
✅  Node.js (LTS — v18 or v20)
✅  npm or yarn
✅  MetaMask browser extension → https://metamask.io/download
✅  A deployed StudentCredential.sol contract address on Sepolia
✅  Sepolia testnet ETH (for issuing credentials)
     → Faucets: https://sepoliafaucet.com
                https://faucet.alchemy.com
```

### 1. Clone & Install

```bash
git clone https://github.com/sreyoshmajumder/student-credential-vault.git
cd student-credential-vault
npm install
```

### 2. Deploy the Smart Contract

```bash
# Option A: Remix IDE (easiest — no local setup)
# 1. Open https://remix.ethereum.org
# 2. Create StudentCredential.sol (paste contract code)
# 3. Compile → Select pragma ^0.8.0
# 4. Deploy → Environment: Injected Provider (MetaMask → Sepolia)
# 5. Copy the deployed contract address

# Option B: Hardhat (advanced)
npm install --save-dev hardhat
npx hardhat init
# Add contract, configure network, run:
npx hardhat run scripts/deploy.js --network sepolia
```

### 3. Configure Contract Address

```javascript
// src/utils/contract.js
const CONTRACT_ADDRESS = "0xYOUR_DEPLOYED_CONTRACT_ADDRESS_HERE";

// Also update the ABI with your compiled contract's ABI
const ABI = [
  "function issueCredential(string,string,uint256,string,string) public",
  "function verifyCredential(uint256) view returns (bool)",
  "function getCredential(uint256) view returns (uint256,string,string,uint256,string,string,bool)",
  "function credentialCount() view returns (uint256)",
  "event CredentialIssued(uint256 indexed,string,string,string)"
];
```

### 4. Configure MetaMask for Sepolia

```
MetaMask → Network dropdown → Add network → Sepolia Test Network
OR: MetaMask → Settings → Advanced → Show test networks: ON
RPC URL:  https://rpc.sepolia.org
Chain ID: 11155111
Symbol:   SepoliaETH
Explorer: https://sepolia.etherscan.io
```

### 5. Get Testnet ETH

```bash
# Free Sepolia testnet ETH from faucets:
https://sepoliafaucet.com           # Alchemy faucet
https://faucet.quicknode.com/ethereum/sepolia
https://www.infura.io/faucet/sepolia
```

### 6. Start the App

```bash
npm start
# → http://localhost:3000
```

### 7. Test the Full Flow

```
Step 1: Connect MetaMask (college wallet — must be contract owner)
Step 2: Fill credential form:
          Name: "Sreyosh Majumder"
          ID:   "CS2024001"
          Year: 2024
          Field: "Computer Science"
          Type:  "Degree"
Step 3: Click "Issue Credential" → MetaMask popup → Confirm → Wait ~15s
Step 4: Note the returned Credential ID (e.g., 1)
Step 5: Switch to "Verify" tab (no wallet needed)
Step 6: Enter ID: 1 → Click Verify
Step 7: See: ✅ VALID — full credential details displayed
```

---

## 🔭 Future Roadmap

```
v1.0 ── CURRENT ─────────────────────────────────────────────────────────
  ✅  Solidity smart contract: StudentCredential.sol
  ✅  issueCredential() with onlyOwner access control
  ✅  verifyCredential() + getCredential() public view functions
  ✅  React 18.2 + ethers.js v6.16 frontend
  ✅  College Admin UI: issue credentials form
  ✅  Employer UI: verify by credential ID
  ✅  MetaMask wallet integration
  ✅  Deployed on Ethereum Sepolia testnet

v2.0 ── ENHANCED CONTRACT ───────────────────────────────────────────────
  🔲  revokeCredential() function (colleges can revoke if needed)
  🔲  Multi-college support (mapping of authorised issuers)
  🔲  IPFS integration for storing credential PDFs (content hash on-chain)
  🔲  Batch issuance (gas efficient for graduation ceremonies)
  🔲  ERC-721 NFT credentials (students own a non-transferable SBT)

v3.0 ── TRUST & DISCOVERY ───────────────────────────────────────────────
  🔲  QR code on credential → links to dApp verification page
  🔲  Public credential explorer (browse all issued credentials)
  🔲  Institution registry (verified college addresses listed)
  🔲  Credential type categories + filtering
  🔲  LinkedIn integration — add verified blockchain credential to profile

v4.0 ── PRODUCTION ──────────────────────────────────────────────────────
  🔲  Deploy to Ethereum Mainnet (production)
  🔲  Polygon / L2 deployment (lower gas costs for institutions)
  🔲  Mobile-responsive PWA
  🔲  Government partnership for official academic record system
  🔲  API for HR software integration (ATS systems)
```

---

## 🛠️ Tech Stack

<div align="center">

![Solidity](https://img.shields.io/badge/Solidity-6d28d9?style=for-the-badge&logo=solidity&logoColor=white)
![Ethereum](https://img.shields.io/badge/Ethereum-3730a3?style=for-the-badge&logo=ethereum&logoColor=white)
![React](https://img.shields.io/badge/React%2018-0ea5e9?style=for-the-badge&logo=react&logoColor=white)
![ethers.js](https://img.shields.io/badge/ethers.js%20v6-7c3aed?style=for-the-badge&logo=ethereum&logoColor=white)
![MetaMask](https://img.shields.io/badge/MetaMask-e97316?style=for-the-badge&logo=metamask&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ca8a04?style=for-the-badge&logo=javascript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-7c3aed?style=for-the-badge&logo=css3&logoColor=white)

</div>

---

## 👨‍💻 Author

<div align="center">

**Built with ⛓️ + 🔐 + ❤️ by [Sreyosh Majumder](https://github.com/sreyoshmajumder)**

[![GitHub](https://img.shields.io/badge/GitHub-sreyoshmajumder-4f46e5?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sreyoshmajumder)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0284c7?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR_LINKEDIN)

> *"Your degree is only as trustworthy as the institution behind it. With blockchain, it's as trustworthy as mathematics itself."*

</div>

---

## ⭐ Show Some Love

```
★  Star this repository
🍴  Fork it and add NFT-based Soulbound Token credentials
🐛  Open issues for bugs or feature suggestions
📢  Share with universities, EdTech companies, and blockchain devs
```

---

<div align="center">

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:4a1a8a,50:2d1b69,100:1a0a3e&height=120&section=footer&text=Your%20Credentials.%20On-Chain.%20Forever.&fontSize=16&fontColor=e9d5ff&fontAlignY=65)

</div>
