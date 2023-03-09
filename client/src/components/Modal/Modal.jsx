export const Modal = () => {
  const open = true;
  return (
      <div
        className={`w-full h-screen flex justify-center items-center fixed scroll- z-30 right-0 top-0 bg-black/70 ${
          open ? "block" : "hidden" 
        }`}
      >
        <div className="relative bg-white w-full sm:left-28  max-w-sm  border shadow-md h-56 rounded-lg  dark:bg-gray-700"></div>
      </div>
  );
};
