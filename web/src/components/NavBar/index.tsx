import { Logo, NavContainer } from "./styles";
import logoImg from '../../assets/logo.svg'
import { MenuBook } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';



export function NavBar() {
  return (
    <NavContainer >
      <MenuIcon sx={{ fontSize: 45, color: "#C7981F" }} />
      <Logo src={logoImg} alt="Golden Book" />
      <MenuBook sx={{ fontSize: 45, color: "#C7981F" }} />
    </NavContainer>
  )
}