import { useState } from "react";

const useBurnPage = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [burnAmount, setBurnAmount] = useState("");
    const [txButton, setTxButton] = useState("");
    const [txProgress, setTxProgress] = useState(false);
    const [burnTxHash, setBurnTxHash] = useState("");
    const [statsSupplies, setStatsSupplies] = useState({});
    const [tokenAddress, setTokenAddress] = useState("");
    const [allSupplies, setAllSupplies] = useState([]);
    const [burnTransactions, setBurnTransactions] = useState([]);
    const [coinData, setCoinData] = useState({});
    const [openChainSelector, setOpenChainSelector] = useState(false);
    const [receiveChains, setReceiveChains] = useState([]);
    const [suppliesChain, setSuppliesChain] = useState("");
    const [toastMsg, setToastMsg] = useState("");
    const [toastSev, setToastSev] = useState("");

    const executeBurn = () => {
        
    };

    const onChangeBurnAmount = (amount: string) => {
        setBurnAmount(amount);
    };

    return {
        walletAddress,
        setWalletAddress,
        isWalletConnected,
        setIsWalletConnected,
        burnAmount,
        setBurnAmount,
        txButton,
        setTxButton,
        txProgress,
        setTxProgress,
        burnTxHash,
        setBurnTxHash,
        statsSupplies,
        setStatsSupplies,
        tokenAddress,
        setTokenAddress,
        allSupplies,
        setAllSupplies,
        burnTransactions,
        setBurnTransactions,
        coinData,
        setCoinData,
        openChainSelector,
        setOpenChainSelector,
        receiveChains,
        setReceiveChains,
        suppliesChain,
        setSuppliesChain,
        toastMsg,
        setToastMsg,
        toastSev,
        setToastSev,
        executeBurn,
        onChangeBurnAmount,
    };
};

export default useBurnPage;
