import React from 'react'

type Props = {

    title: string;
    openChainSelector: boolean,
    setOpenChainSelector: any,
    chains: [];
    selectedChain: string;
    setSelectedChain: any;

}

const ChainSelector = (props: Props) => {
    return (
        <div>ChainSelector</div>
    )
}

export default ChainSelector