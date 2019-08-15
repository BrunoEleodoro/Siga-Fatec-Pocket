import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { createMuiTheme } from '@material-ui/core/styles';
import { withTheme, ThemeProvider } from '@material-ui/styles';
import Dashboard from './pages/Dashboard';
import ReactGA from 'react-ga';

const theme = createMuiTheme({
    palette: {
        primary: { 500: '#a64ed0', contrastText: "#fff" },
        // primary: { main: "#e91e63", contrastText: "#fff" },
        secondary: {
            main: '#a64ed0',
        },
    },
});

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            usuario: "",
            senha: "",
            next: false
        }
    }

    componentDidMount() {
        ReactGA.initialize('UA-145398422-1');
        this.getDataFromLocalStorage();
        this.setState({ reload: true });
    }
    getDataFromLocalStorage() {
        this.state.usuario = localStorage.getItem("usuario");
        this.state.senha = localStorage.getItem("senha");
    }
    nextPage = () => {
        this.getDataFromLocalStorage();
        this.setState({ next: true });
    }

    render() {

        var pageContent = ""
        if (this.state.usuario == null || this.state.usuario.length == 0) {
            pageContent = (<Login nextPage={this.nextPage} />)
        } else {
            pageContent = (<Dashboard />)
        }

        return (
            <ThemeProvider theme={theme}>
                {pageContent}
            </ThemeProvider>
        );
    }
}

export default App;
