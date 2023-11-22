import { useEffect, useState } from "react";
import { Button, CardContent, Collapse, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import { GoldListsService } from "../../services/api/goldlists/GoldListsService";
import { useLocation, useNavigate } from "react-router-dom";
import { IWord, WordsService } from "../../services/api/words/WordsService";
import OpenWordDialog from "../../components/openWordDialog";
import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export function OpenGoldList() {
    const navigate = useNavigate();
    const location = useLocation();

    const [rows, setRows] = useState<IWord[]>([]);
    const [wordSelected, setWordSelected] = useState<IWord>({
        id: 0,
        word: '',
        translation: '',
        status: ''
    });

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setExpanded(false);
        setOpen(false);
    };

    const [expanded, setExpanded] = useState(false);
    const [status, setStatus] = useState("Revisar");

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
        WordsService.updateStatus(wordSelected.id, status);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
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
    }, [wordSelected.status]);

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
                                }} onClick={() => { handleClickOpen(), setWordSelected({ id: word.id, word: word.word, translation: word.translation, status: word.status }) }}>ABRIR</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ color: "#C7981F" }}>{wordSelected.word}</DialogTitle>
                <DialogContent>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Status</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={wordSelected.status.toString()}
                            label="Status"
                            onChange={handleChange}
                        >
                            <MenuItem value={"Revisar"}>Revisar</MenuItem>
                            <MenuItem value={"Aprendida"}>Aprendida</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <ExpandMore onClick={handleExpandClick}>
                        <ExpandMoreIcon />
                    </ExpandMore>
                </DialogActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>{wordSelected.translation}</Typography>
                    </CardContent>
                </Collapse>
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