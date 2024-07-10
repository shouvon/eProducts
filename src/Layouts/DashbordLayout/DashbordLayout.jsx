import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { DashbordLayoutBox } from "../DashbordLayout/style";
import Footer from "./Footer/Footer";

function DashbordLayout() {
  return (
    <DashbordLayoutBox>
      <Header />
      <main>
        <div className="body">
          <Outlet />
        </div>
      </main>
      <Footer/>
    </DashbordLayoutBox>
  );
}

export default DashbordLayout;
