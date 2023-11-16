import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <Link to="/newgoldlist">
      <Button variant="contained" href="">
        Criar Nova GoldList
      </Button>
    </Link>
  )
}