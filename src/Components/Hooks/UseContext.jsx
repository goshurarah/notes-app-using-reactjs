import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { createContext, useContext } from "react";

const MyName = createContext()

function UseContext() {
    return (
        <>
            <Paper elevation={12} sx={{
                paddingBottom: '1rem',
                width: '50%',
                marginTop: '2rem',
                mx: 'auto'
            }} >
                <h1 className='useContext-heading'>(useContext Hook)</h1>
                <Container>
                    <MyName.Provider value={'Hurarah'}>
                        <Comp1 />
                        <Comp2 />
                        <Comp3 />
                        <Comp4 />
                        <Comp5 />
                    </MyName.Provider>
                </Container>
            </Paper>
        </>
    );
}


function Comp1() {
    const getValue = useContext(MyName)
    return (
        <>
            <h1>Component 1</h1>
            <h2>{getValue}</h2>
        </>
    )
}

function Comp2() {
    const getValue = useContext(MyName)
    return (
        <>
            <h1>Component 2</h1>
            <h2>{getValue}</h2>
        </>
    )
}

function Comp3() {
    const getValue = useContext(MyName)
    return (
        <>
            <h1>Component 3</h1>
            <h2>{getValue}</h2>
        </>
    )
}

function Comp4() {
    const getValue = useContext(MyName)
    return (
        <>
            <h1>Component 4</h1>
            <h2>{getValue}</h2>
        </>
    )
}

function Comp5() {
    const getValue = useContext(MyName)
    return (
        <>
            <h1>Component 5</h1>
            <h2>{getValue}</h2>
        </>
    )
}
export default UseContext;