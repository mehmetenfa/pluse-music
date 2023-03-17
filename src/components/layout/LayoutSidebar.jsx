import React from "react";
import { Sidebar } from "../common/Sidebar";

export const LayoutSidebar = ({ children }) => {
  return (
    <>
      <main className="md:flex md:justify-between px-5 mt-8">
        <div className="content w-full md:w-[73%]">{children}</div>
        <div
          className="md:-[25%] border-2 border-solid border-gray-100 rounded-xl p-5"
          style={{ width: sidebarWidth }}
        >
          <Sidebar />
        </div>
      </main>
    </>
  );
};
