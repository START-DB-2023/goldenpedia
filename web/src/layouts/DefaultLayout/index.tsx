import { Container } from "@mui/material";
import { Outlet } from 'react-router-dom'
import { NavBar } from "../../components/NavBar";

export function DefaultLayout(){
  return(
    <Container>
      <NavBar />
      <Outlet />

    </Container>
  )
}