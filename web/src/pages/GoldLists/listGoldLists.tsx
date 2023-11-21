import { useEffect, useMemo, useState } from "react";
import { Button, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material";

import { GoldListsService, IGoldList } from "../../services/api/goldlists/GoldListsService";
import { useNavigate, useSearchParams } from "react-router-dom";


export function ListGoldLists() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [rows, setRows] = useState<IGoldList[]>([]);
    const [totalElements, setTotalElements] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const currentPage = useMemo(() => {
        return Number(searchParams.get('currentPage')) || 1;
    }, [searchParams]);

    useEffect(() => {

        GoldListsService.getAll(currentPage - 1, 5)
            .then((result) => {
                if (!(result instanceof Error)) {
                    setRows(result.goldlists);
                    setTotalElements(result.totalElements);
                    setTotalPages(result.totalPages);
                }
            }).catch((error: Error) => {
                console.log(error);
            });
    }, [currentPage]);

    return (
        <>
            <h2>Suas Gold Lists</h2>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Data</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow component={Paper} variant="outlined" square={false} key={row.id} sx={{ borderWidth: '0.2rem' }}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.createdAt.toString()}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell><Button variant="contained" sx={{
                                    bgcolor: "#F9DD96",
                                    color: "#484646",
                                    ":hover": { bgcolor: '#C7981F' }
                                }} onClick={() => navigate(`/goldlist`, { state: { id: row.id, name: row.name, description: row.description } })}>ABRIR</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        {totalElements !== 0 && totalPages > 1 && (<TableRow>
                            <TableCell colSpan={4}>
                                <Pagination page={currentPage} count={totalPages} onChange={(_, newPage) => {
                                    setSearchParams({ currentPage: newPage.toString() })
                                }} />
                            </TableCell>
                        </TableRow>)}
                    </TableFooter>
                </Table>
            </TableContainer >
        </>
    );
}