type BurnSectionFunction = (amount: string) => void;
type ExecuteBurnBurnSectionFunction = () => void;
type BurnSectionProps = {
  burnAmount :string ;
  onChangeBurnAmount : BurnSectionFunction,
  executeBurn : ExecuteBurnBurnSectionFunction,
  txButton : string;
  txProgress : boolean;
  burnTxHash : string;
}



const BurnSection = ({ burnAmount, onChangeBurnAmount, executeBurn, txButton, txProgress, burnTxHash } : BurnSectionProps) => (
  <BurnButtonBar>
    {/* Burn button and input */}
    {/* Other content */}
  </BurnButtonBar>
);

export default BurnSection;