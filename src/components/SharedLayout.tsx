import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "./Header/Header";
import { ToastContainer } from "react-toastify";

export const SharedLayout = () => {
  return (
    <div className="">
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
      />
    </div>
  );
};
