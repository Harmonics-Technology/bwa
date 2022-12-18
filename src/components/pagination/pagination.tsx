import React from "react";

import {
  useLocation,
  redirect,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

interface PaginationProp {
  page?: number;
  total_count: number;
}

export default function Pagination({ total_count }: PaginationProp) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const total_pages = Math.ceil(total_count / 10);

  const handleNext = () => {
    const nextPage = parseInt(page) + 1;
    setSearchParams({ page: nextPage as unknown as string });
  };

  const handlePrev = () => {
    const prevPage = parseInt(page) - 1;
    setSearchParams({ page: prevPage as unknown as string });
  };

  return (
    <div className="mt-3 flex justify-between">
      <button
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => handlePrev()}
        disabled={page === "1" ? true : false}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Previous
      </button>
      <button
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => handleNext()}
        disabled={page === total_pages.toString() ? true : false}
      >
        Next
        <svg
          aria-hidden="true"
          className="w-5 h-5 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
