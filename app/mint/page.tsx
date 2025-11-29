import { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { useWriteContract } from "wagmi";

export default function MintPage() {
  const CONTRACT_ADDRESS = "<DEPLOYED_CONTRACT_ADDRESS>"; // Replace with your deployed contract address
  const ABI = [
    {
      "inputs": [
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "string", "name": "tokenURI", "type": "string" }
      ],
      "name": "mint",
      "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  const [fortune, setFortune] = useState("");
  const [minting, setMinting] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { writeContractAsync } = useWriteContract();

  async function handleMint() {
    if (!address || !fortune) return;
    setMinting(true);
    try {
      // For demo: use fortune as tokenURI (in production, upload to IPFS or similar)
      const tokenURI = `data:application/json,{\"name\":\"Fortune Cookie\",\"description\":\"${fortune}\"}`;
      const hash = await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: "mint",
        args: [address, tokenURI],
      });
      setTxHash(hash as string);
    } catch (err) {
      alert("Mint failed: " + err);
    }
    setMinting(false);
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>Mint Your Fortune Cookie NFT</h1>
      {!isConnected ? (
        <button onClick={() => connect({ connector: injected() })}>Connect Wallet</button>
      ) : (
        <button onClick={() => disconnect()}>Disconnect</button>
      )}
      <br /><br />
      <textarea
        placeholder="Paste your fortune here..."
        value={fortune}
        onChange={e => setFortune(e.target.value)}
        rows={4}
        style={{ width: "100%" }}
      />
      <br /><br />
      <button onClick={handleMint} disabled={!isConnected || minting || !fortune}>
        {minting ? "Minting..." : "Mint NFT"}
      </button>
      {txHash && (
        <div>
          <p>Transaction sent!</p>
          <a href={`https://basescan.org/tx/${txHash}`} target="_blank" rel="noopener noreferrer">View on BaseScan</a>
        </div>
      )}
    </div>
  );
}
