import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Loader() {
  return (
    <li>
      <div role="status" className=" animate-pulse">
        <span className="sr-only">Loading...</span>
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="flex min-w-0 flex-1 items-center">
              <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-48 mb-4" />
                  <p className="mt-2 flex items-center text-sm text-gray-500"></p>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-200 max-w-[360px]" />
                </div>
                <div className="hidden md:block">
                  <div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]" />
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mt-6" />
                </div>
              </div>
            </div>
            <div>
              <ChevronRightIcon
                className="h-5 w-5 text-green-400"
                aria-hidden="true"
              />
            </div>
          </div>
      </div>
    </li>
  );
}
