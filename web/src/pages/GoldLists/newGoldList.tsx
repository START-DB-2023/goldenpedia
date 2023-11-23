import { Box, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


import { useForm, SubmitHandler } from "react-hook-form";
import { GoldListsService } from '../../services/api/goldlists/GoldListsService';

type NewGoldListFormData = {
  name: string;
  description: string;
}

export function NewGoldListPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<NewGoldListFormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<NewGoldListFormData> = async data => {
    const newGoldList = await GoldListsService.create({
      name: data.name,
      description: data.description,
      words: []
    })
    navigate(`/newword/${data.name}`, { state: { newGoldList } })
  };

  return (
    <Container component="main" sx={{
      width: '40vw',
      height: '50vh',
    }}>
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
        <Box component="form" onSubmit={handleSubmit(onSubmit)}
          sx={{
            mt: 1,
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center'
          }}>
          <Typography component="h4" sx={{ marginBottom: '0.5rem', color: '#C7981F', fontWeight: 'bold' }}> CRIE UM NOME PARA A GOLDLIST</Typography>
          <TextField id="outlined-basic" label="DIGITE UM NOME" variant="outlined" {...register("name", { required: true })} />
          <Typography component="h4" sx={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#C7981F', fontWeight: 'bold' }}>AGORA UMA DESCRIÇÃO</Typography>
          <TextField
            id="outlined-basic"
            label="DIGITE UMA DESCRIÇÃO"
            variant="outlined"
            aria-multiline
            maxRows={20}
            {...register("description", { required: true })}
          />
          <Box sx={{
            margin: '2rem',
            padding: '0.5rem',
            display: 'flex',
            justifyItems: 'space-between'
          }}>
            <Button onClick={() => navigate(-1)} variant='contained' sx={{ bgcolor: '#FF7272', width: '8rem', color: "#484646", ":hover": { bgcolor: '#f73d3d' } }}>CANCELAR</Button>
            <Button type='submit' variant='contained' sx={{ bgcolor: '#72FF99', width: '8rem', color: "#484646", ":hover": { bgcolor: '#3ef970' } }}>CRIAR</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}