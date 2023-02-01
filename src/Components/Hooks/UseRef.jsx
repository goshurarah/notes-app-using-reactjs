import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useState, useEffect, useRef } from 'react'

function UseRef() {
    const [inputValue, setInputValue] = useState('');
    const count = useRef(0);
    console.log('count  :>> ', count);

    const refTest = useRef(null)
    console.log('refTest  :>> ', refTest);
    console.log('refTest && Current :>> ', refTest.current);

    const refTest2 = useRef(null)
    console.log('refTest2  :>> ', refTest2);
    console.log('refTest2 && Current :>> ', refTest2.current);

    useEffect(() => {
        count.current = count.current + 1;
    });
    return (
        <>
            <Paper elevation={12} sx={{
                paddingBottom: '1rem',
                width: '50%',
                marginTop: '2rem',
                mx: 'auto'
            }} >
                <h1 ref={refTest} className='useRef-heading'>(useRef Hook)</h1>
                <Container ref={refTest2}>
                    <TextField
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        // id="outlined-multiline-flexible"
                        label="Any Text"
                        multiline
                        maxRows={1}
                        color="secondary"
                    />
                    <h1>Render Count: {count.current}</h1>
                </Container>
            </Paper>
        </>
    );
}

function UseRef2() {
    const [inputValue, setInputValue] = useState('')
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
        console.log('inputElement after:>> ', inputElement);
    };

    return (
        <>
            <Paper elevation={12} sx={{
                paddingBottom: '1rem',
                width: '50%',
                marginTop: '2rem',
                mx: 'auto'
            }} >
                <h1 className='useRef-heading'>(useRef Hook/Focus Input-Field)</h1>
                <Container>
                    {/* <input type="text" ref={inputElement} /> */}
                    <TextField
                        ref={inputElement}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        // id="outlined-multiline-flexible"
                        label="Any Text"
                        maxRows={1}
                        color="secondary"
                    />
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button size="small" variant="outlined" color="success"
                            onClick={focusInput}>
                            Save</Button>
                    </Stack>
                </Container>
            </Paper>
        </>
    );
}

function UseRef3() {
    const [inputValue, setInputValue] = useState('');

    const inputElement = useRef('');

    useEffect(() => {
        inputElement.current = inputValue;
    }, [inputValue]);
    return (
        <>
            <Paper elevation={12} sx={{
                paddingBottom: '1rem',
                width: '50%',
                marginTop: '2rem',
                mx: 'auto'
            }} >
                <h1 className='useRef-heading'>(useRef Hook/Previous Value)</h1>
                <Container>
                    <TextField
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        // id="outlined-multiline-flexible"
                        label="Any Text"
                        multiline
                        maxRows={1}
                        color="secondary"
                    />
                    <h1>Current: {inputValue}</h1>
                    <h1>Previous: {inputElement.current}</h1>
                </Container>
            </Paper>
        </>
    );
}
export default UseRef;
export { UseRef2, UseRef3 }