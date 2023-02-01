import React from 'react'
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

class CustomGetDerivedStateFromProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };

    }
    static getDerivedStateFromProps(props, state) {
        console.log('in Update this is GetDerivedStateFromProps value = ', props)
        return { favoritecolor: props.parentColor };
    }
    changeColor = () => {
        this.setState({ favoritecolor: 'purple' })
    }

    render() {
        console.log('in Update this is GetDerivedStateFromProps value = ', this.state)
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
                        <button type="button" onClick={this.changeColor}>Change color</button>
                    </Container>
                </Paper>
            </>
        );
    }
}

class CustomShouldComponentUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    shouldComponentUpdate() {
        return true;
        // return false; // if false then shouldComponentUpdate does not work
    }
    changeColor = () => {
        this.setState({ favoritecolor: "blue" });
    }
    render() {
        console.log('in Update this is ShouldComponentUpdate value = ', this.state)
        return (
            <>
                <Paper elevation={5} sx={{
                    paddingBottom: '1rem',
                    width: '70%',
                    marginTop: '2rem',
                    mx: 'auto'
                }} >
                    <h1 className='useState-heading'>shouldComponentUpdate()</h1>
                    <Container>
                        <div>
                            <h2>Favorite Color is {this.state.favoritecolor}</h2>
                            <button type="button" onClick={this.changeColor}>Change color</button>
                        </div>
                    </Container>
                </Paper>
            </>
        );
    }
}

class CustomRender2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };

    }
    changeColor = () => {
        this.setState({ favoritecolor: "blue" });
    }
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
                        <div>
                            <h2>Favorite Color is {this.state.favoritecolor}</h2>
                            <button type="button" onClick={this.changeColor}>Change color</button>
                        </div>
                    </Container>
                </Paper>
            </>
        );
    }
}

class CustomGetSnapshotBeforeUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "black" })
        }, 3000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('in Update This is getSnapshotBeforeUpdate prevState =', prevState)
        console.log('in Update This is getSnapshotBeforeUpdate prevProps =', prevProps)
    }
    componentDidUpdate() {
        console.log('in Update This is getSnapshotBeforeUpdate after =', this.state.favoritecolor);
    }
    render() {
        console.log('this is props = ', this.props)
        return (
            <>
                <Paper elevation={5} sx={{
                    paddingBottom: '1rem',
                    width: '70%',
                    marginTop: '2rem',
                    mx: 'auto'
                }} >
                    <h1 className='useState-heading'>getSnapshotBeforeUpdate()</h1>
                    <Container>
                        <div>
                            <h2>Favorite Color is {this.state.favoritecolor}</h2>
                        </div>
                    </Container>
                </Paper>
            </>
        );
    }
}

class CustomComponentDidUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "green" })
        }, 3000)
    }
    componentDidUpdate() {
        console.log('in Update This is componentDidUpdate = ', this.state.favoritecolor)
    }
    render() {
        return (
            <>
                <Paper elevation={5} sx={{
                    paddingBottom: '1rem',
                    width: '70%',
                    marginTop: '2rem',
                    mx: 'auto'
                }} >
                    <h1 className='useState-heading'>componentDidUpdate()</h1>
                    <Container>
                        <div>
                            <h2>Favorite Color is {this.state.favoritecolor}</h2>
                        </div>
                    </Container>
                </Paper>
            </>
        );
    }
}
export default CustomGetDerivedStateFromProps
export { CustomShouldComponentUpdate, CustomRender2, CustomGetSnapshotBeforeUpdate, CustomComponentDidUpdate }