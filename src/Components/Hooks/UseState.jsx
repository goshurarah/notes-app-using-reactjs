import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import TableApi from './TableApi'

import { useState } from 'react'



function UseState() {
    const [count, setValue] = useState(0)

    const [personName, setName] = useState('Ali')
    const [personAge, setAge] = useState(18)
    return (
        <>
            <Paper elevation={12} sx={{
                paddingBottom: '1rem',
                width: '50%',
                marginTop: '2rem',
                mx: 'auto'
            }} >
                <h1 className='useState-heading'>(useState Hook)</h1>
                <Container>
                    <Typography variant="h4" gutterBottom>Counter Buttons:</Typography>
                    <Stack direction="row" spacing={2}>
                        <Button size="small" variant="outlined" color="success" onClick={() => setValue(count + 1)} ><AddIcon /></Button>
                        <Button size="small" variant="outlined" color="error" onClick={() => setValue(count - 1)} ><RemoveIcon /></Button>
                    </Stack>
                    <p>{`Count Value = (${count})`}</p>

                    <Typography variant="h4" gutterBottom>Update Buttons:</Typography>
                    <ul>
                        <li>{personName} is {personAge} years old...</li>
                    </ul>
                    <Stack direction="row" spacing={2}>
                        <Button size="small" variant="outlined" color="success" onClick={() => setName('Haider')} >Click to update Name</Button>
                        <Button size="small" variant="outlined" color="error" onClick={() => setAge(25)} >Click to update Age</Button>
                    </Stack>
                </Container>
            </Paper>

            <Typography variant="h4" gutterBottom>Table Props:</Typography>
            <TableContainer>
                <Table aria-label="simple table" bgcolor="secondary.main">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Age</TableCell>
                            <TableCell align="left">City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {TableApi.map((item) => (
                            <TableRow>
                                <TableCell align="left">{item.name}</TableCell>
                                <TableCell align="left">{item.age}</TableCell>
                                <TableCell align="left">{item.city}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
export default UseState;