export default function TopBar(params) {
    return (
      <div className="bg-wite fixed right-0 left-0 md:left-[224px] z-20 h-[60px] text-2xl px-3 pr-4 flex items-center justify-between border-b-[1px] border-[#D9d9d9] shadow-sm">
        <h3 className="font-semibold flex gap-4 items-center">
          Payouts
          <span className="flex items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-sm"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
            </svg>
            <span className="text-sm text-nowrap font-normal">How it works</span>
          </span>
        </h3>
        <div className="bg-[#F2F2F2] inputSearch rounded-md flex gap-3 items-center px-3 py-2 text-[#808080]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            className="text-base"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
          </svg>
          <input
            className="outline-none float-grow text-lg bg-[#F2F2F2] "
            placeholder="Search features, tutorials, etc."
            type="text"
          />
        </div>
        <div className="right-but flex gap-1">
          <button className="bg-[#F2F2F2] rounded-full px-2 py-1 sm:flex">
            A
          </button>
          <button className="bg-[#F2F2F2] rounded-full px-2 py-1">B</button>
        </div>
      </div>
    );
}