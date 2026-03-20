import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import { getContract, getContractAddress } from './utils/contract';

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [network, setNetwork] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  
  // State for issuing credentials
  const [issueStudentName, setIssueStudentName] = useState("");
  const [issueStudentId, setIssueStudentId] = useState("");
  const [issueYear, setIssueYear] = useState("");
  const [issueFieldOfStudy, setIssueFieldOfStudy] = useState("");
  const [issueType, setIssueType] = useState("degree");
  const [issueStatus, setIssueStatus] = useState({ message: "", type: "" });
  const [isIssuing, setIsIssuing] = useState(false);
  
  // State for verifying credentials
  const [verifyId, setVerifyId] = useState("");
  const [verifyStatus, setVerifyStatus] = useState({ message: "", type: "" });
  const [credentialData, setCredentialData] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  
  // Status types
  const STATUS_TYPES = {
    SUCCESS: "success",
    ERROR: "error",
    INFO: "info"
  };

  // Initialize provider and check network
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      initializeProvider();
      
      // Listen for account changes
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      // Listen for network changes
      window.ethereum.on("chainChanged", handleNetworkChanged);
    } else {
      setVerifyStatus({
        message: "Please install MetaMask to use this application",
        type: STATUS_TYPES.ERROR
      });
    }
    
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
        window.ethereum.removeListener("chainChanged", handleNetworkChanged);
      }
    };
  }, []);

  const initializeProvider = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(provider);
      
      // Get network
      const network = await provider.getNetwork();
      setNetwork(network.name);
      
      // Check if accounts are already connected
      const accounts = await provider.send("eth_accounts", []);
      if (accounts.length > 0) {
        const signer = await provider.getSigner();
        setSigner(signer);
        setWalletAddress(accounts[0]);
        setContract(new ethers.Contract(getContractAddress(), [
          "function issueCredential(string _studentName, string _studentId, uint256 _year, string _fieldOfStudy, string _type)",
          "function verifyCredential(uint256 _id) view returns (bool)",
          "function getCredential(uint256 _id) view returns (string, string, uint256, string, string, bool)"
        ], signer));
      }
    } catch (error) {
      console.error("Provider initialization error:", error);
    }
  };

  const connectWallet = async () => {
    setIsConnecting(true);
    setVerifyStatus({ message: "Connecting wallet...", type: STATUS_TYPES.INFO });
    
    try {
      if (!window.ethereum) {
        throw new Error("No crypto wallet found. Please install MetaMask.");
      }
      
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const accounts = await provider.send("eth_accounts", []);
      
      setProvider(provider);
      setSigner(signer);
      setWalletAddress(accounts[0]);
      setContract(new ethers.Contract(getContractAddress(), [
        "function issueCredential(string _studentName, string _studentId, uint256 _year, string _fieldOfStudy, string _type)",
        "function verifyCredential(uint256 _id) view returns (bool)",
        "function getCredential(uint256 _id) view returns (string, string, uint256, string, string, bool)"
      ], signer));
      
      setVerifyStatus({
        message: `Connected: ${walletAddress}`,
        type: STATUS_TYPES.SUCCESS
      });
    } catch (error) {
      setVerifyStatus({
        message: `Connection failed: ${error.message}`,
        type: STATUS_TYPES.ERROR
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const handleAccountsChanged = (accounts) => {
    if (accounts.length > 0) {
      setWalletAddress(accounts[0]);
      // Reconnect signer
      if (provider) {
        provider.getSigner().then((signer) => {
          setSigner(signer);
          setContract(new ethers.Contract(getContractAddress(), [
            "function issueCredential(string _studentName, string _studentId, uint256 _year, string _fieldOfStudy, string _type)",
            "function verifyCredential(uint256 _id) view returns (bool)",
            "function getCredential(uint256 _id) view returns (string, string, uint256, string, string, bool)"
          ], signer));
        });
      }
    } else {
      setWalletAddress("");
      setSigner(null);
      setContract(null);
      setVerifyStatus({
        message: "Wallet disconnected",
        type: STATUS_TYPES.INFO
      });
    }
  };

  const handleNetworkChanged = (chainId) => {
    // Convert chainId from hex to decimal
    const networkId = parseInt(chainId, 16);
    let networkName = "Unknown";
    
    switch (networkId) {
      case 1: networkName = "Ethereum Mainnet"; break;
      case 11155111: networkName = "Sepolia Testnet"; break;
      case 1337: networkName = "Localhost"; break;
      default: networkName = `Network ID: ${networkId}`;
    }
    
    setNetwork(networkName);
    setVerifyStatus({
      message: `Network changed to ${networkName}. Please reconnect wallet.`,
      type: STATUS_TYPES.INFO
    });
    
    // Reset connection
    setWalletAddress("");
    setSigner(null);
    setContract(null);
  };

  const issueCredential = async () => {
    if (!contract) {
      setIssueStatus({
        message: "Please connect your wallet first",
        type: STATUS_TYPES.ERROR
      });
      return;
    }

    // Validate inputs
    if (!issueStudentName.trim() || !issueStudentId.trim() || !issueYear.trim() || !issueFieldOfStudy.trim()) {
      setIssueStatus({
        message: "Please fill in all fields",
        type: STATUS_TYPES.ERROR
      });
      return;
    }

    const yearNum = parseInt(issueYear);
    if (isNaN(yearNum) || yearNum < 1900 || yearNum > 2100) {
      setIssueStatus({
        message: "Please enter a valid year",
        type: STATUS_TYPES.ERROR
      });
      return;
    }

    setIsIssuing(true);
    setIssueStatus({ message: "Issuing credential...", type: STATUS_TYPES.INFO });

    try {
      const tx = await contract.issueCredential(
        issueStudentName.trim(),
        issueStudentId.trim(),
        yearNum,
        issueFieldOfStudy.trim(),
        issueType
      );
      
      // Wait for transaction to be mined
      const receipt = await tx.wait();
      
      setIssueStatus({
        message: `Credential issued successfully! Transaction: ${receipt.hash}`,
        type: STATUS_TYPES.SUCCESS
      });
      
      // Clear form
      setIssueStudentName("");
      setIssueStudentId("");
      setIssueYear("");
      setIssueFieldOfStudy("");
      
    } catch (error) {
      setIssueStatus({
        message: `Issuance failed: ${error.message}`,
        type: STATUS_TYPES.ERROR
      });
    } finally {
      setIsIssuing(false);
    }
  };

  const verifyCredential = async () => {
    if (!contract) {
      setVerifyStatus({
        message: "Please connect your wallet first",
        type: STATUS_TYPES.ERROR
      });
      return;
    }

    if (!verifyId.trim()) {
      setVerifyStatus({
        message: "Please enter a credential ID",
        type: STATUS_TYPES.ERROR
      });
      return;
    }

    const idNum = parseInt(verifyId);
    if (isNaN(idNum) || idNum <= 0) {
      setVerifyStatus({
        message: "Please enter a valid credential ID",
        type: STATUS_TYPES.ERROR
      });
      return;
    }

    setIsVerifying(true);
    setVerifyStatus({ message: "Verifying credential...", type: STATUS_TYPES.INFO });
    setCredentialData(null);

    try {
      const isValid = await contract.verifyCredential(idNum);
      
      if (isValid) {
        const [name, studentId, year, fieldOfStudy, type, isValidBool] = 
          await contract.getCredential(idNum);
        
        setCredentialData({
          name,
          studentId,
          year: year.toString(),
          fieldOfStudy,
          type,
          isValid: isValidBool
        });
        
        setVerifyStatus({
          message: "Credential is valid ✅",
          type: STATUS_TYPES.SUCCESS
        });
      } else {
        setVerifyStatus({
          message: "Credential is invalid or does not exist ❌",
          type: STATUS_TYPES.ERROR
        });
      }
    } catch (error) {
      setVerifyStatus({
        message: `Verification failed: ${error.message}`,
        type: STATUS_TYPES.ERROR
      });
    } finally {
      setIsVerifying(false);
    }
  };

  if (!walletAddress) {
    return (
      <div className="App">
        <h1>Decentralized Student Credential Vault</h1>
        <div className="status info">
          {verifyStatus.message && (
            <p>{verifyStatus.message}</p>
          )}
          <button 
            onClick={connectWallet} 
            disabled={isConnecting}
          >
            {isConnecting ? "Connecting..." : "Connect Wallet"}
          </button>
          
          {network && (
            <p>Current network: {network}</p>
          )}
          
          <div style={{ marginTop: '20px' }}>
            <h3>How it works:</h3>
            <ol>
              <li>Connect your MetaMask wallet</li>
              <li>Colleges issue credentials on-chain (using the issue form)</li>
              <li>Employers verify credentials instantly by ID</li>
              <li>No need to call the institution for verification</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header>
        <h1>Decentralized Student Credential Vault</h1>
        <div>
          <p>Connected as: <strong>{walletAddress}</strong></p>
          <p>Network: {network}</p>
        </div>
      </header>

      {!signer && (
        <div className="status info">
          <p>Please connect your wallet to continue</p>
          <button onClick={connectWallet}>Connect Wallet</button>
        </div>
      )}

      {signer && (
        <>
          <section>
            <h2>Issue Credential (College Administrator)</h2>
            <div className="status {issueStatus.type}">
              {issueStatus.message && <p>{issueStatus.message}</p>}
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Student Name"
                value={issueStudentName}
                onChange={(e) => setIssueStudentName(e.target.value)}
                disabled={isIssuing}
              />
              <input
                type="text"
                placeholder="Student ID"
                value={issueStudentId}
                onChange={(e) => setIssueStudentId(e.target.value)}
                disabled={isIssuing}
              />
              <input
                type="number"
                placeholder="Year (e.g., 2026)"
                value={issueYear}
                onChange={(e) => setIssueYear(e.target.value)}
                disabled={isIssuing}
              />
              <input
                type="text"
                placeholder="Field of Study"
                value={issueFieldOfStudy}
                onChange={(e) => setIssueFieldOfStudy(e.target.value)}
                disabled={isIssuing}
              />
              <select
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                disabled={isIssuing}
              >
                <option value="degree">Degree</option>
                <option value="internship">Internship</option>
                <option value="certificate">Certificate</option>
              </select>
              
              <button
                onClick={issueCredential}
                disabled={isIssuing}
              >
                {isIssuing ? "Issuing..." : "Issue Credential"}
              </button>
            </div>
          </section>

          <section>
            <h2>Verify Credential (Employer)</h2>
            <div className="status {verifyStatus.type}">
              {verifyStatus.message && <p>{verifyStatus.message}</p>}
            </div>
            
            <div>
              <input
                type="number"
                placeholder="Credential ID to verify"
                value={verifyId}
                onChange={(e) => setVerifyId(e.target.value)}
                disabled={isVerifying}
              />
              <button
                onClick={verifyCredential}
                disabled={isVerifying}
              >
                {isVerifying ? "Verifying..." : "Verify Credential"}
              </button>
            </div>
            
            {credentialData && (
              <div className="credential-card">
                <h3>Credential Details:</h3>
                <p><span className="label">Name:</span> {credentialData.name}</p>
                <p><span className="label">Student ID:</span> {credentialData.studentId}</p>
                <p><span className="label">Year:</span> {credentialData.year}</p>
                <p><span className="label">Field of Study:</span> {credentialData.fieldOfStudy}</p>
                <p><span className="label">Type:</span> {credentialData.type}</p>
                <p><span className="label">Status:</span> 
                  {credentialData.isValid ? (
                    <span style={{ color: 'green' }}>Valid ✅</span>
                  ) : (
                    <span style={{ color: 'red' }}>Invalid ❌</span>
                  )}
                </p>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default App;
