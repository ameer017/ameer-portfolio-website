import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div class="w-full gap-x-2 flex justify-center items-center">
        <div class="w-5 bg-[#000] animate-pulse h-5 rounded-full animate-bounce"></div>
        <div class="w-5 animate-pulse h-5 bg-[#eee] rounded-full animate-bounce"></div>
        <div class="w-5 h-5 animate-pulse bg-[#000] rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
