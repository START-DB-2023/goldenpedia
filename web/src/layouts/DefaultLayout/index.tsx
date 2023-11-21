import { BgContainer } from "./styles";

import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
export function DefaultLayout() {
  return (
    <>
      <NavBar />
      <BgContainer>
        <Outlet />
      </BgContainer>
    </>
  )
}