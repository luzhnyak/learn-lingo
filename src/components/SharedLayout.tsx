import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "./Header";

export const SharedLayout = () => {
  return (
    <div className="">
      <Header />

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
