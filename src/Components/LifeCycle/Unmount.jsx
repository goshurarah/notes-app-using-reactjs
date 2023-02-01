import React from 'react'
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';


class CustomUnmount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
    }
    delHeader = () => {
        this.setState({ show: false });

    }
    componentWillUnmount() {
        console.log('This is componentWillUnmount', this.state)
    }
    render() {
        console.log('in Unmount This is componentWillUnmount = ', this.state)
        let myHeading;
        if (this.state.show) {
            myHeading = 'this is heading'
        }
        return (
            <>
                <Paper elevation={5} sx={{
                    paddingBottom: '1rem',
                    width: '70%',
                    marginTop: '2rem',
                    mx: 'auto'
                }} >
                    <h1 className='useState-heading'>componentWillUnmount()</h1>
                    <Container>
                        <h2>{myHeading}</h2>
                        <button type='button' onClick={this.delHeader}>Delete</button>
                    </Container>
                </Paper>
            </>
        );
    }
}
export default CustomUnmount