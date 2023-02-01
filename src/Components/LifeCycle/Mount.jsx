import React from 'react'
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';


class CustomContructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "purple" };
    }
    render() {
        console.log('in Mount this is constructor value = ', this.state)
        return (
            <>
                <Paper elevation={5} sx={{
                    paddingBottom: '1rem',
                    width: '70%',
                    marginTop: '2rem',
                    mx: 'auto'
                }} >
                    <h1 className='useState-heading'>constructor()</h1>
                    <Container>
                        <h2>Favorite Color is {this.state.favoritecolor}</h2>
                    </Container>
                </Paper>
            </>
        );
    }
}

class CustomGetDerivedStateFromProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "purple" };
    }
    static getDerivedStateFromProps(props, state) {
        return { favoritecolor: props.parentColor };
    }
    render() {
        console.log('in Mount this is GetDerivedStateFromProps value = ', this.state)
        return (
            <>
                <Paper elevation={5} sx={{
                    paddingBottom: '1rem',
                    width: '70%',
                    marginTop: '2rem',
                    mx: 'auto'
                }} >
                    <h1 className='useState-heading'>getDerivedStateFromProps()</h1>
                    <Container>
                        <h2>Favorite Color is {this.state.favoritecolor}</h2>
                    </Container>
                </Paper>
            </>
        );
    }
}

class CustomRender extends React.Component {
    render() {
        return (
            <>
                <Paper elevation={5} sx={{
                    paddingBottom: '1rem',
                    width: '70%',
                    marginTop: '2rem',
                    mx: 'auto'
                }} >
                    <h1 className='useState-heading'>render()</h1>
                    <Container>
                        <h2>This is only render data</h2>
                    </Container>
                </Paper>
            </>
        );
    }
}

class CustomComponentDidMount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "purple" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "khaki" })
        }, 3000)
    }
    render() {
        console.log('in Mount this is ComponentDidMount value = ', this.state)
        return (
            <>
                <Paper elevation={5} sx={{
                    paddingBottom: '1rem',
                    width: '70%',
                    marginTop: '2rem',
                    mx: 'auto'
                }} >
                    <h1 className='useState-heading'>componentDidMount()</h1>
                    <Container>
                        <h2>Favorite Color is {this.state.favoritecolor}</h2>
                    </Container>
                </Paper>
            </>
        );
    }
}
export default CustomContructor
export { CustomGetDerivedStateFromProps, CustomRender, CustomComponentDidMount }