import { Box, Container, TextField, Typography } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


import { useForm, SubmitHandler } from "react-hook-form";
import { GoldListsService } from '../../services/api/goldlists/GoldListsService';
import { IWord } from '../../services/api/words/WordsService';
import { useEffect, useState } from 'react';

export function NewWordPage() {
    const location = useLocation();
    const { register, handleSubmit, reset, formState, formState: { isSubmitSuccessful } } = useForm<IWord>({ defaultValues: { word: '', translation: '' } });
    const navigate = useNavigate();

    const [submittedData, setSubmittedData] = useState<IWord>();

    const onSubmit: SubmitHandler<IWord> = async data => {
        const goldListId = location.state.newGoldList;
        const goldList = await GoldListsService.getById(goldListId);

        if (!(goldList instanceof Error)) {
            await GoldListsService.update({
                ...goldList,
                words: [data, ...goldList.words]
            }).then(() => {
                setSubmittedData(data);

                alert(`Palavra adicionada com sucesso!
                Adicione mais ou clique em "PRONTO" para sair.`)
            });
            console.log(goldList.words.length);
        }


        navigate(`/newword/${goldList.name}`, { state: { newGoldList: goldListId } })
    };

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ word: '', translation: '' });
        }
    }, [formState, submittedData, reset]);

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
                    <Typography component="h4" sx={{ marginBottom: '0.5rem', color: '#C7981F', fontWeight: 'bold' }}> ADICIONE PALAVRAS À SUA GOLD LIST</Typography>
                    <TextField id="wordField" label="DIGITE UMA PALAVRA" variant="outlined" {...register("word", { required: true })} />
                    <TextField id="translationField" label="DIGITE A TRADUÇÃO" variant="outlined" {...register("translation", { required: true })} />
                    <Box sx={{
                        margin: '2rem',
                        padding: '0.5rem',
                        display: 'flex',
                        justifyItems: 'space-between'
                    }}>
                        <Button onClick={() => navigate('/')} variant='contained' sx={{ color: '#484646', bgcolor: '#D3D7DA', ":hover": { bgcolor: '#7f8284' }, width: '8rem' }}>PRONTO</Button>
                        <Button type='submit' variant='contained' sx={{ bgcolor: '#72FF99', width: '8rem', color: "#484646", ":hover": { bgcolor: '#3ef970' }, marginLeft: '5.2rem' }}>ADICIONAR</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}