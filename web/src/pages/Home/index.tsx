import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ListGoldLists } from '../GoldLists/listGoldLists';

export function HomePage() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <ListGoldLists />
      <Button variant="contained" sx={{ bgcolor: '#C7981F', ":hover": { bgcolor: '#754b1d' } }}
        onClick={() => navigate('/newgoldlist')}>
        Criar Nova GoldList
      </Button>
    </Container>
  )
}