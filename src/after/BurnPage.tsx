import AppToastComponent from "./components/app toast components/AppToastComponent";
import BurnPageTitle from "./components/burn components/BurnPageTitle";
import BurnSection from "./components/burn components/BurnSection";
import BurnStatsSection from "./components/burn components/BurnStatsAction";
import ChainSelectorComponent from "./components/chain comonents/ChainSelectorComponent";
import TransactionTable from "./components/transaction compinents/TransactionTable";
import useBurnPage from "./hooks/useBurnPage";
import { DashboardLayoutStyled } from "./utils/Helper";

export const BurnPage = () => {
  const {
    walletAddress,
    isWalletConnected,
    executeBurn,
    burnAmount,
    onChangeBurnAmount,
    txButton,
    txProgress,
    burnTxHash,
    statsSupplies,
    tokenAddress,
    allSupplies,
    burnTransactions,
    coinData,
    openChainSelector,
    setOpenChainSelector,
    receiveChains,
    suppliesChain,
    setSuppliesChain,
    toastMsg,
    toastSev
  } = useBurnPage();

  return (
    <div>
      <DashboardLayoutStyled className="burnpage">
        <div className="top_conatiner burnpage" style={{ alignItems: "flex-start" }}>
          
          <BurnPageTitle />
          <BurnSection
            burnAmount={burnAmount}
            onChangeBurnAmount={onChangeBurnAmount}
            executeBurn={executeBurn}
            txButton={txButton}
            txProgress={txProgress}
            burnTxHash={burnTxHash}
          />
          <BurnStatsSection
            statsSupplies={statsSupplies}
            tokenAddress={tokenAddress}
            allSupplies={allSupplies}
          />
        </div>
      </DashboardLayoutStyled>
      <TransactionTable burnTransactions={burnTransactions} coinData={coinData} />

      <ChainSelectorComponent
        openChainSelector={openChainSelector}
        setOpenChainSelector={setOpenChainSelector}
        receiveChains={receiveChains}
        suppliesChain={suppliesChain}
        setSuppliesChain={setSuppliesChain}
      />
      <AppToastComponent toastMsg={toastMsg} toastSev={toastSev} />
    </div>
  );
};
