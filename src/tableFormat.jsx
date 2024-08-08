export default function TableFormat() {
  return (
    <div className="flex-col">
      <div className="text-lg flex justify-between">
        <div className="search text-[#808080] w-full flex items-center  gap-3 px-5 py-1 max-w-[300px] rounded border border-[#D9D9D9]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
          </svg>
          <input
            type="text"
            name=""
            id=""
            placeholder="Order ID or transaction"
            className="outline-none flex-grow"
          />
        </div>
        <div className="flex gap-3 ">
          <button className="rounded flex py-1 px-3 gap-2 items-center border border-[#D9D9D9] p-1 bg-white">
            Sort{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
          <button className="rounded px-2 py-1 border border-[#D9D9D9] p-1 bg-white">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </div>
      </div>
      <table className="table-auto w-full font-normal">
        <tr className="rounded-sm p-2 bg-[#F2F2F2] text-[#898989] font-normal">
          <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
            Order ID
          </th>
          <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
            Status
          </th>
          <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
            Transaction ID
          </th>
          <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
            Refund Date
          </th>
          <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
            Order Amount
          </th>
        </tr>
        <tbody className="bg-white divide-[#E6E6E6]">
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
              #281209
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
              <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
              Successful
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              TRX123456
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              Today, 8:45 PM
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
              ₹1125.00
            </td>
            <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
          </tr>
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
              #281210
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
              <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
              Processing
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              TRX789012
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              Tomorrow, 10:00 AM
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
              ₹950.50
            </td>
          </tr>
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
              #281211
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
              <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
              Successful
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              TRX345678
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              Yesterday, 3:30 PM
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
              ₹750.00
            </td>
            <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
          </tr>
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
              #281212
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
              <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
              Successful
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              TRX901234
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              Today, 11:20 AM
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
              ₹2000.00
            </td>
            <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
          </tr>
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
              #281213
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
              <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
              Processing
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              TRX567890
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              Tomorrow, 9:00 AM
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
              ₹1800.00
            </td>
            <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
          </tr>
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
              #281214
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
              <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
              Processing
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              TRX098765
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              Yesterday, 2:00 PM
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
              ₹500.00
            </td>
            
            <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
          </tr>
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
              #281215
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
              <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
              Successful
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              TRX456789
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              Today, 10:30 AM
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
              ₹3000.00
            </td>
            <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
          </tr>
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
              #281216
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
              <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
              Processing
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              TRX987654
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              Tomorrow, 11:30 AM
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
              ₹1200.00
            </td>
            <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
          </tr>
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
              #281217
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
              <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
              Processing
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              TRX654321
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              Yesterday, 4:00 PM
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
              ₹900.00
            </td>
            <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
          </tr>
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
              #281218
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
              <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
              Successful
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              TRX234567
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              Today, 9:45 AM
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
              ₹1500.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
