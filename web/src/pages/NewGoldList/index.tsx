import { Box, Container, TextField, Typography } from '@mui/material';
import { Form, Link } from "react-router-dom";
import Button from '@mui/material/Button';

export function NewGoldListPage() {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyItems: 'center',
                    alignItems: 'center',
                }}
            >
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Typography component="h1" variant="h5">
                        CRIE UM NOME PARA A GOLDLIST
                    </Typography>
                    <TextField id="outlined-basic" label="DIGITE UM NOME" variant="outlined" />
                    <Typography component="h1" variant="h5">
                        AGORA UMA DESCRIÇÃO
                    </Typography>
                    <TextField id="outlined-basic" multiline label="DIGITE UMA DESCRIÇÃO" variant="outlined" />
                </Box>
                <Box>
                    <Link to={'/'}>
                        <Button variant='contained' sx={{ bgcolor: '#FF7272' }}>CANCELAR</Button>
                    </Link>
                    <Button variant='contained' sx={{ bgcolor: '#72FF99' }}>CRIAR</Button>
                </Box>
            </Box>
        </Container>
    )
}