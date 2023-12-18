"use client";

import { useEffect, useRef, useState } from "react";

const PlanTable = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const stickyDivRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    stickyDivRef.current &&
      setIsSticky(window.scrollY >= stickyDivRef.current.offsetTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex w-full flex-col gap-4">
      <div
        className={`${
          isSticky && "sticky top-0 bg-white"
        } flex w-full justify-end`}
      >
        <div
          className="flex w-full items-center justify-end self-end py-3 md:w-[65%]"
          ref={stickyDivRef}
        >
          <div className="planBox">Mobile</div>
          <div className="planBox">Basic</div>
          <div className="planBox">Standard</div>
          <div className="planBox">Premium</div>
        </div>
      </div>

      <table className="text-black">
        <tbody>
          <tr className="planRow">
            <td className="w-full py-3 text-center md:w-[35%] md:py-4 md:text-left">
              Monthly price
            </td>
            <td className="planCell text-black/50">
              THB 99
            </td>
            <td className="planCell text-black/50">
              THB 169
            </td>
            <td className="planCell text-black/50">
              THB 349
            </td>
            <td className="planCell text-black/50">
              THB 419
            </td>
          </tr>

          <tr className="planRow">
            <td className="w-full py-3 text-center md:w-[35%] md:py-4 md:text-left">
              Video quality
            </td>
            <td className="planCell text-black/50">
              Good
            </td>
            <td className="planCell text-black/50">
              Good
            </td>
            <td className="planCell text-black/50">
              Better
            </td>
            <td className="planCell text-black/50">
              Best
            </td>
          </tr>

          <tr className="planRow">
            <td className="w-full py-3 text-center md:w-[35%] md:py-4 md:text-left">
              Resolution
            </td>
            <td className="planCell text-black/50">
              480p
            </td>
            <td className="planCell text-black/50">
              720p
            </td>
            <td className="planCell text-black/50">
              1080p
            </td>
            <td className="planCell text-black/50">
              4K+HDR
            </td>
          </tr>

          <tr className="flex flex-wrap text-xs md:text-base">
            <td className="w-full py-3 text-center md:w-[35%] md:py-4 md:text-left">
              Devices you can use to watch
            </td>
            <td
              className="
                  flex w-[calc(100%/4)] flex-col gap-3 
                  pb-16 text-center font-semibold text-black/50 md:w-[calc(65%/4)] md:pt-5
                  "
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-black/50"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Phone"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">Phone</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black/50"
                  data-name="Tablet"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">Tablet</div>
              </div>
            </td>
            <td
              className="
                  flex w-[calc(100%/4)] flex-col gap-3 
                  pb-16 text-center font-semibold text-black/50 md:w-[calc(65%/4)] md:pt-5
                  "
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-black/50"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Phone"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">Phone</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black/50"
                  data-name="Tablet"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">Tablet</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black/50"
                  data-name="Laptop"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.0001 6.49964L5.00003 15.2485C4.32836 15.2967 3.66158 15.3517 3.00003 15.4134L3.00011 5.64259C3.00011 5.15287 3.35477 4.7352 3.83802 4.65582C6.44383 4.22777 9.17979 4 12.0001 4C14.8204 4 17.5564 4.22777 20.1622 4.65582C20.6455 4.7352 21.0001 5.15288 21.0001 5.6426L21 15.4134C20.3385 15.3517 19.6717 15.2967 19 15.2485L19.0001 6.49964C16.7553 6.17311 14.4115 6 12.0001 6C9.58874 6 7.24495 6.17311 5.0001 6.49964ZM1.11859 19.6355C4.58689 19.2212 8.23466 19 12 19C15.7653 19 19.413 19.2212 22.8813 19.6355L23.1186 17.6497C19.5701 17.2257 15.8431 17 12 17C8.15686 17 4.42984 17.2257 0.881348 17.6497L1.11859 19.6355Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">Computer</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black/50"
                  data-name="Tv"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 3C0.895431 3 0 3.89543 0 5V16C0 17.1046 0.895431 18 2 18H22C23.1046 18 24 17.1046 24 16V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V16H2V5ZM6.06305 21.1859C8.00211 21.0634 9.98427 21 12 21C14.0157 21 15.9979 21.0634 17.937 21.1859L18.063 19.1899C16.0818 19.0647 14.0576 19 12 19C9.94241 19 7.9182 19.0647 5.93695 19.1899L6.06305 21.1859Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">TV</div>
              </div>
            </td>
            <td
              className="
                  flex w-[calc(100%/4)] flex-col gap-3 
                  pb-16 text-center font-semibold text-black/50 md:w-[calc(65%/4)] md:pt-5
                  "
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-black/50"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Phone"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">Phone</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black/50"
                  data-name="Tablet"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">Tablet</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black/50"
                  data-name="Laptop"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.0001 6.49964L5.00003 15.2485C4.32836 15.2967 3.66158 15.3517 3.00003 15.4134L3.00011 5.64259C3.00011 5.15287 3.35477 4.7352 3.83802 4.65582C6.44383 4.22777 9.17979 4 12.0001 4C14.8204 4 17.5564 4.22777 20.1622 4.65582C20.6455 4.7352 21.0001 5.15288 21.0001 5.6426L21 15.4134C20.3385 15.3517 19.6717 15.2967 19 15.2485L19.0001 6.49964C16.7553 6.17311 14.4115 6 12.0001 6C9.58874 6 7.24495 6.17311 5.0001 6.49964ZM1.11859 19.6355C4.58689 19.2212 8.23466 19 12 19C15.7653 19 19.413 19.2212 22.8813 19.6355L23.1186 17.6497C19.5701 17.2257 15.8431 17 12 17C8.15686 17 4.42984 17.2257 0.881348 17.6497L1.11859 19.6355Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">Computer</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black/50"
                  data-name="Tv"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 3C0.895431 3 0 3.89543 0 5V16C0 17.1046 0.895431 18 2 18H22C23.1046 18 24 17.1046 24 16V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V16H2V5ZM6.06305 21.1859C8.00211 21.0634 9.98427 21 12 21C14.0157 21 15.9979 21.0634 17.937 21.1859L18.063 19.1899C16.0818 19.0647 14.0576 19 12 19C9.94241 19 7.9182 19.0647 5.93695 19.1899L6.06305 21.1859Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">TV</div>
              </div>
            </td>
            <td
              className="
                  flex w-[calc(100%/4)] flex-col gap-3 
                  pb-16 text-center font-semibold text-black/50 md:w-[calc(65%/4)] md:pt-5
                  "
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-black/50"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Phone"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">Phone</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black/50"
                  data-name="Tablet"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">Tablet</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black/50"
                  data-name="Laptop"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.0001 6.49964L5.00003 15.2485C4.32836 15.2967 3.66158 15.3517 3.00003 15.4134L3.00011 5.64259C3.00011 5.15287 3.35477 4.7352 3.83802 4.65582C6.44383 4.22777 9.17979 4 12.0001 4C14.8204 4 17.5564 4.22777 20.1622 4.65582C20.6455 4.7352 21.0001 5.15288 21.0001 5.6426L21 15.4134C20.3385 15.3517 19.6717 15.2967 19 15.2485L19.0001 6.49964C16.7553 6.17311 14.4115 6 12.0001 6C9.58874 6 7.24495 6.17311 5.0001 6.49964ZM1.11859 19.6355C4.58689 19.2212 8.23466 19 12 19C15.7653 19 19.413 19.2212 22.8813 19.6355L23.1186 17.6497C19.5701 17.2257 15.8431 17 12 17C8.15686 17 4.42984 17.2257 0.881348 17.6497L1.11859 19.6355Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">Computer</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black/50"
                  data-name="Tv"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 3C0.895431 3 0 3.89543 0 5V16C0 17.1046 0.895431 18 2 18H22C23.1046 18 24 17.1046 24 16V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V16H2V5ZM6.06305 21.1859C8.00211 21.0634 9.98427 21 12 21C14.0157 21 15.9979 21.0634 17.937 21.1859L18.063 19.1899C16.0818 19.0647 14.0576 19 12 19C9.94241 19 7.9182 19.0647 5.93695 19.1899L6.06305 21.1859Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-xs font-bold">TV</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlanTable;
