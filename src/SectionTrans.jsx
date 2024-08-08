import TableFormat from "./tableFormat";
import TransactionSection from "./Transactions";
export default function Sec2() {
  return (
    <div className="flex flex-col gap-5">
      <TransactionSection></TransactionSection>
      <TableFormat></TableFormat>
    </div>
  );
}
