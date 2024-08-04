export default function ColoredCard({amount}) {
  return (
    <div className="text-base colored-card min-w-[300px] bg-bluecard-600 hover:bg-bluecard-700 flex flex-col flex-grow rounded-md text-white">
      <div className="flex flex-col gap-3 p-5 ">
        <h3 className="flex gap-3 items-center text-md">
          Next Payout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </h3>

        <div className="flex gap-3 justify-between font-semibold">
          <h3 className="text-3xl">₹{amount} </h3>
          <h5 className="flex items-center text-lg underline">
            23 Orders{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </h5>
        </div>
      </div>
      <div className=" p-5 rounded-md flex justify-between bg-bluecard-700">
        <span>Next Payment Date:</span>
        <span>Today, 4:00PM</span>
      </div>
    </div>
  );
}
