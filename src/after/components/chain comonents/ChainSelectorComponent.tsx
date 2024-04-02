import ChainSelector from "./ChainSelector";

type ChainSelectorComponentProps = {
  openChainSelector: boolean,
  setOpenChainSelector: any,
  receiveChains: [];
  suppliesChain: string;
  setSuppliesChain: any;
}


const ChainSelectorComponent = ({ openChainSelector, setOpenChainSelector, receiveChains, suppliesChain, setSuppliesChain }: ChainSelectorComponentProps) => (
  <ChainSelector
    title={"Switch Token Chain"}
    openChainSelector={openChainSelector}
    setOpenChainSelector={setOpenChainSelector}
    chains={receiveChains}
    selectedChain={suppliesChain}
    setSelectedChain={setSuppliesChain}
  />
);

export default ChainSelectorComponent;