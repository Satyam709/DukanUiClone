import ColoredCard from "./ColoredCard.jsx";
import NormalCard2 from "./NormalCard2.jsx";
import NormalCard from "./NormalCard.jsx";
import OverviewHead from "./OverviewHeader.jsx";

export default function AccinfoCard() {
  return (
    <div className="acc-highlights flex flex-col gap-5 border p-5">
      <OverviewHead></OverviewHead>
      <div className="info-cards flex gap-5 flex-wrap">
        <ColoredCard amount={"2,312.23"}></ColoredCard>
        <NormalCard></NormalCard>
        <NormalCard2></NormalCard2>
      </div>
    </div>
  );
}
