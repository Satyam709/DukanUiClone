export default function OverviewHead() {
  return (
    <div className="flex  justify-between">
      <h4 className="text-xl font-semibold">Overview</h4>
      <button className="timeSelector text-[#4d4d4d] flex gap-2 items-center hover:cursor-pointer bg-white shadow-sm rounded px-[14px] py-[6px] text-lg border">
        This Month
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
}
