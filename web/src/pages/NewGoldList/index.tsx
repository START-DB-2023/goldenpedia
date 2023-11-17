import { Box, Container, TextField, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export function NewGoldListPage() {
  return (
    <Container component="main" maxWidth="xs">
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyItems: 'center',
          alignItems: 'center',
          background: '#fff',
          padding: '0.5rem',
          borderRadius: '0.5rem',
          border: '3px solid #c0c0c0'
        }}
      >
        <Box component="form" noValidate
          sx={{
            mt: 1,
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center'
          }}>
          <Typography component="h4" sx={{ marginBottom: '0.5rem', color: '#C7981F', fontWeight: 'bold'}}> CRIE UM NOME PARA A GOLDLIST</Typography>
          <TextField id="outlined-basic" label="DIGITE UM NOME" variant="outlined" />
          <Typography component="h4" sx={{marginTop: '0.5rem', marginBottom: '1rem', color: '#C7981F', fontWeight: 'bold'}}>AGORA UMA DESCRIÇÃO</Typography>
          <TextField 
            id="outlined-basic" 
            label="DIGITE UMA DESCRIÇÃO" 
            variant="outlined"
            aria-multiline
            maxRows={20}
          />
          <Box sx={{
            margin: '2rem',
            padding: '0.5rem',
            display: 'flex',
            justifyItems: 'space-between'
          }}>
          <Link to={'/'}>
            <Button variant='contained' sx={{  bgcolor: '#FF7272', width: '8rem' }}>CANCELAR</Button>
          </Link>
          <Button variant='contained' sx={{ bgcolor: '#72FF99', width: '8rem'}}>CRIAR</Button>
        </Box>
        </Box>
      </Box>
    </Container>
  )
}