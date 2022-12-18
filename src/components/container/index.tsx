export const Container = ({ children }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 h-full w-1/2 bg-white"
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 h-full w-1/2 bg-gray-50"
        aria-hidden="true"
      />
      <div className="relative flex min-h-full flex-col">{children}</div>;
    </>
  );
};
