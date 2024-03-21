import React from "react";
import Navbar from "./Navbar";

const MainLayout = (Component) =>
  function HOC() {
    return (
      <div className="flex bg-slate-300 relative">       
        <div className="md:ml-60 flex flex-col flex-grow bg-slate-300">
          <div className="sticky top-0 z-20">
            <Navbar />
          </div>
          <main className="relative h-full overflow-hidden bg-white justify-center md:mt-2">
            <Component />
          </main>
        </div>
      </div>
    );
  };
export default MainLayout;
