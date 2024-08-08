export default function TransactionSection(params) {
    return (
      <section>
        <div>
          <h5 className="text-xl font-semibold mb-5">Transactions | This Month</h5>
          <button className="payout py-1 mr-3 text-lg px-[10px] text-[#898989] bg-[#E6E6E6] rounded-full ">
            Payouts (22)
          </button>
          <button className="refund py-1 text-center  text-lg px-[20px] text-white bg-bluecard-600 rounded-full ">
            Refunds (6)
          </button>
        </div>
        <div className="history-table">

        </div>
      </section>
    );
}