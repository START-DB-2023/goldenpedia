import { Container } from "@mui/material";

export function NavBar(){
  return (
    <Container sx={{
      p: '2' 

    }}>
      <ul>
      <li><p>Menu de Amburguer</p></li>
      <li><p>Livrinho</p></li>
      </ul> 
    </Container>
  )
}