const hre = require("hardhat");

async function main() {
  const FortuneCookieNFT = await hre.ethers.getContractFactory("FortuneCookieNFT");
  const contract = await FortuneCookieNFT.deploy();
  await contract.deployed();
  console.log("FortuneCookieNFT deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
