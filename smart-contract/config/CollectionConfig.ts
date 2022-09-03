import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Glitch',
  tokenName: 'Glitch',
  tokenSymbol: 'GCT',
  hiddenMetadataUri: 'ipfs://QmVdx73bjehNSSczPfAm7puDjBGDjrYnAPwsxkHLpHjxns/Hidden.json',
  maxSupply: 1000,
  whitelistSale: {
    price: 0.001,
    maxMintAmountPerTx: 20,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0,
    maxMintAmountPerTx: 1000,
  },
  contractAddress: '0x1F307b7999600266F7973781A1C7EeFFBFDcBDD0',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
