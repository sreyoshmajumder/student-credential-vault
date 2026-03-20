import { ethers } from "ethers";

// Replace with your deployed contract address on Sepolia (or other network)
const CONTRACT_ADDRESS = "0x6eb9F7Be3024610463ae48fFaCe886435416e175";

// ABI matching our StudentCredential.sol contract
const ABI = [
  "function issueCredential(string _studentName, string _studentId, uint256 _year, string _fieldOfStudy, string _type)",
  "function verifyCredential(uint256 _id) view returns (bool)",
  "function getCredential(uint256 _id) view returns (string, string, uint256, string, string, bool)",
  "function credentialCount() view returns (uint256)",
  "event CredentialIssued(uint256 indexed id, string studentName, string studentId)"
];

export const getContract = async () => {
  if (!window.ethereum) {
    throw new Error("No crypto wallet found. Please install MetaMask.");
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    return contract;
  } catch (error) {
    throw new Error(`Failed to connect to wallet: ${error.message}`);
  }
};

export const getContractAddress = () => CONTRACT_ADDRESS;
