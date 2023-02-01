import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'

function UseEffect() {
    let [timer, setTimer] = useState(0)

    useEffect(() => {
        console.log('useEffect hook run');
    },[])

    return (
        <>
            <Paper elevation={12} sx={{
                paddingBottom: '1rem',
                width: '50%',
                marginTop: '2rem',
                mx: 'auto'
            }} >
                <h1 className='useEffect-heading'>(useEffect Hook)</h1>
                <Container>
                    <Typography variant="h4" gutterBottom>Counter Watch:</Typography>
                    <p>{`Counter Value is = (${timer})`}</p>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button size="small" variant="outlined" color="success"
                            onClick={() => setInterval(() => {
                                setTimer(timer++)
                            }, 1000)}>
                            To Start</Button>
                    </Stack>

                </Container>
            </Paper>
        </>
    );
}

export default UseEffect;