import { Container} from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#ffe8fc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> 
      <Link to="/newgoldlist">
        <Button variant="contained" href="">
          Criar Nova GoldList
        </Button>
      </Link>
    </Container>
  )
}