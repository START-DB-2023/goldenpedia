import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ListGoldLists } from '../GoldLists/listGoldLists';

export function HomePage() {
  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <ListGoldLists />
      <Link to="/newgoldlist">
        <Button variant="contained" sx={{ bgcolor: '#C7981F', ":hover": { bgcolor: '#754b1d' } }}>
          Criar Nova GoldList
        </Button>
      </Link>
    </Container>
  )
}