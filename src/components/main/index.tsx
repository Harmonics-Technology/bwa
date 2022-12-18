import React from "react";

export const Main: React.FC = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8">
      <div className="min-w-0 flex-1 bg-white xl:flex">
        <div className="bg-white lg:min-w-0 lg:flex-1 mt-5">{children}</div>
      </div>
    </div>
  );
};
