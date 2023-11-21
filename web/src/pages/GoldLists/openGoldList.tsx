import { useEffect, useState } from "react";
import { Button, Container, Dialog, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { GoldListsService } from "../../services/api/goldlists/GoldListsService";
import { useLocation, useNavigate } from "react-router-dom";
import { IWord } from "../../services/api/words/WordsService";
import OpenWordDialog from "../../components/openWordDialog";


export function OpenGoldList() {
    const navigate = useNavigate();
    const location = useLocation();

    const [rows, setRows] = useState<IWord[]>([]);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {

        GoldListsService.getWords(location.state.id)
            .then((result) => {
                if (!(result instanceof Error)) {
                    setRows(result);
                }
            }).catch((error: Error) => {
                console.log(error);
            });
    }, []);

    return (
        <Container maxWidth="sm" sx={{ bgcolor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxHeight: '80vh' }}>
            <h1>{location.state.name}</h1>
            {location.state.description}
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Palavra</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((word) => (
                            <TableRow component={Paper} variant="outlined" square={false} key={word.id}>
                                <TableCell>{word.word}</TableCell>
                                <TableCell>{word.status}</TableCell>
                                <TableCell><Button variant="contained" sx={{
                                    bgcolor: "#F9DD96",
                                    color: "#484646",
                                    ":hover": { bgcolor: '#C7981F' }
                                }} onClick={handleClickOpen}>ABRIR</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >

            <Dialog open={open} onClose={handleClose}>
                <OpenWordDialog />
            </Dialog>

            <Button variant="contained" sx={{ color: '#484646', bgcolor: '#D3D7DA', ":hover": { bgcolor: '#7f8284' }, alignSelf: "flex-start" }}
                onClick={() => {
                    navigate(-1)
                }}>
                Voltar
            </Button>
        </Container >
    );
}