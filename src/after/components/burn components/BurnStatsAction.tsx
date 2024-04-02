import BurnStatsContainer from "./BurnStatsContainer";

type BurnStatsProps = {
  statsSupplies: {};
  tokenAddress: string;
  allSupplies: [];
}
const BurnStatsSection = ({ statsSupplies, tokenAddress, allSupplies }: BurnStatsProps) => (
  <BurnStatsContainer>
    {/* Supply statistics */}
    {/* Other content */}
  </BurnStatsContainer>
);

export default BurnStatsSection;