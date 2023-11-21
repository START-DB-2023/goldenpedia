import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import { DialogActions, DialogTitle, DialogContent, Collapse, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { WordsService } from '../services/api/words/WordsService';

export default function OpenWordDialog() {
    const [expanded, setExpanded] = useState(false);
    const [status, setStatus] = useState('Revisar');

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
        WordsService.updateStatus(1, status);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <DialogTitle sx={{ color: "#C7981F" }}>WORD</DialogTitle>
            <DialogContent>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={status}
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
                    <Typography paragraph>TRADUÇÃO</Typography>
                </CardContent>
            </Collapse>
        </>
    );
}
