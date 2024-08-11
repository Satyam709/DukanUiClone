import React from "react";
import visibility from "./States";
import { useRecoilValue } from "recoil";

function Aside() {
  const val = useRecoilValue(visibility);
  return (
    <div className={`${val?"visible":"collapse z-99999"} md:visible md:w-[224px] p-3 fixed bg-[#1E2640] h-dvh`}>
      <div className="flex gap-6 flex-col">
        <div className="flex items-center justify-between">
          <div className="user items-center text-white flex gap-3">
            <span className="w-[40px] h-[40px] text-lg rounded-sm border flex justify-center items-center">
              U
            </span>{" "}
            <div>
              {" "}
              <h4 className="text-md text-white font-semibold">Nishyan</h4>
              <h4 className="text-sm text-[#d2d4d9] font-normal underline">
                Visit Store
              </h4>
            </div>
          </div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="w-[20px] h-[20px] text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
          </svg>
        </div>
        <div className="px-1">
          <ul className="flex flex-col gap-3 text-[#d2d4d9]">
            <li className="flex gap-3 items-center font-md text-[14px]">
              <span className="w-[40px] h-[40px] text-lg rounded-sm border flex justify-center items-center">
                U
              </span>{" "}
              <a href="">Home</a>
            </li>
            <li className="flex gap-3 items-center">
              {" "}
              <span className="w-[40px] h-[40px] text-lg rounded-sm border flex justify-center items-center">
                U
              </span>{" "}
              <a href="">Order</a>
            </li>
            <li className="flex gap-3 items-center">
              {" "}
              <span className="w-[40px] h-[40px] text-lg rounded-sm border flex justify-center items-center">
                U
              </span>{" "}
              <a href="">Products</a>
            </li>
            <li className="flex gap-3 items-center">
              {" "}
              <span className="w-[40px] h-[40px] text-lg rounded-sm border flex justify-center items-center">
                U
              </span>{" "}
              <a href="">Marketing</a>
            </li>
            <li className="flex gap-3 items-center">
              {" "}
              <span className="w-[40px] h-[40px] text-lg rounded-sm border flex justify-center items-center">
                U
              </span>{" "}
              <a href="">Marketing</a>
            </li>
            <li className="flex gap-3 items-center">
              {" "}
              <span className="w-[40px] h-[40px] text-lg rounded-sm border flex justify-center items-center">
                U
              </span>{" "}
              <a href="">Analytics</a>
            </li>
            <li className="flex gap-3 items-center">
              {" "}
              <span className="w-[40px] h-[40px] text-lg rounded-sm border flex justify-center items-center">
                U
              </span>{" "}
              <a href="">Payouts</a>
            </li>{" "}
            <li className="flex gap-3 items-center">
              {" "}
              <span className="w-[40px] h-[40px] text-lg rounded-sm border flex justify-center items-center">
                U
              </span>{" "}
              <a href="">Discounts</a>
            </li>{" "}
            <li className="flex gap-3 items-center">
              {" "}
              <span className="w-[40px] h-[40px] text-lg rounded-sm border flex justify-center items-center">
                U
              </span>{" "}
              <a href="">Audience</a>
            </li>{" "}
            <li className="flex gap-3 items-center">
              {" "}
              <span className="w-[40px] h-[40px] text-lg rounded-sm border flex justify-center items-center">
                U
              </span>{" "}
              <a href="">Appereance</a>
            </li>
            <li className="flex gap-3 items-center">
              {" "}
              <span className="w-[40px] h-[40px] text-lg rounded-sm border flex justify-center items-center">
                U
              </span>{" "}
              <a href="">Plugins</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Aside;
