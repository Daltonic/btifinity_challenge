const hre = require("hardhat");

async function deployContract(contract_name, arg) {
  try {
    contract = await ethers.deployContract(contract_name, [...arg]);
    await contract.waitForDeployment();

    console.log("Contracts deployed successfully: ", contract.target);
  } catch (error) {
    console.error("Error deploying contracts:", error);
    throw error;
  }
}

async function main() {
  const contract_name = "";
  const contract_args = []
  await deployContract(contract_name, contract_args);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
