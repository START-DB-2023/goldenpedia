import { Container } from "@mui/material";
import { Outlet } from 'react-router-dom'
import { NavBar } from "../../components/NavBar";

export function DefaultLayout() {
  return (
    <Container sx={{ height: '100vh', width: '100vw', bgcolor: '#EAEAEA' }}>
      <NavBar />
      <Outlet />

    </Container>
  )
}