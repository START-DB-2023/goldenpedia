import { useTheme } from '@mui/system';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ListGoldLists } from './components/listGoldLists';
import { Title } from './styles';
import { Header } from '../../layouts/DefaultLayout/styles';

export function HomePage() {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Container maxWidth="sm" sx={{
      marginTop: '5rem',
      bgcolor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: '10px',
      padding: '2rem',
      [theme.breakpoints.down('md')]: {
        width: '100vw',
      }
    }}>
      <Header>
        <Title>
          Suas GoldLists
        </Title>
        <ListGoldLists />
      </Header>
      <Button variant="contained" sx={{ bgcolor: '#C7981F', ":hover": { bgcolor: '#754b1d' } }}
        onClick={() => navigate('/newgoldlist')}>
        Criar Nova GoldList
      </Button>
    </Container>
  )
}