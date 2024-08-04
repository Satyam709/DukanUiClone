export default function NormalCard() {
  return (
    <div className="bg-white min-w-[300px] h-fit flex-grow shadow-sm rounded-md flex p-5 flex-col text-lg font-semibold gap-3">

        <span className="flex gap-3 items-center text-[#4D4D4D] font-normal">
          Amount Pending{" "}
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
        </span>
        <span className="flex justify-between">
          <span className="text-3xl">₹92,312.20</span>
          <span className="flex items-center underline text-[#146EB4]">
            13 Orders{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </span>
      </div>
  );
}