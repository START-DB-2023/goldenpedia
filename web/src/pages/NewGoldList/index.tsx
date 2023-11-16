import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export function NewGoldListPage(){
    return(
        <>
            <h1>Criar Nova GoldList</h1>
            <Link to={"/"}>
                <Button>Home</Button>
            </Link>
        </>
    )
}