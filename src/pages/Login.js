import React from "react";
import { Typography, Card, CardHeader, CardContent } from "@material-ui/core";
import { Row, Col, Grid } from "react-flexbox-grid";
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import GridMaterial from "@material-ui/core/Grid"
import { Button, Icon } from "@material-ui/core";
import LoginIcon from "@material-ui/icons/SendOutlined"
import { callAPI } from "../api/ApiConnector";
import ReactGA from "react-ga"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: "",
            senha: ""
        }
    }
    componentDidMount() {
        ReactGA.initialize('UA-145398422-1');
    }
    handleChange = (e) => {
        console.log()
        this.state[e.target.id] = e.target.value
        this.setState({ reload: true })
    }
    fazerLogin = async () => {
        localStorage.setItem("usuario", new Buffer(this.state.usuario).toString('base64'))
        localStorage.setItem("senha", new Buffer(this.state.senha).toString('base64'))
        this.props.nextPage();
        ReactGA.event({
            category: 'Login',
            action: 'Login button pressed'
        });
    }
    render() {
        return (
            <Grid fluid style={{ height: '100vh', backgroundColor: "#303030" }}>
                <Row center="xs" middle="xs" style={{ height: '100vh' }}>
                    <Col lg={3} md={6} xs={11}>
                        <Card elevation={10}>
                            <CardContent>
                                <GridMaterial container direction="column" justify="center" alignItems="center" >
                                    <Avatar
                                        alt="Icon"
                                        src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/88/1d/ef/881defdd-4db7-2356-983a-6ba7229560ce/AppIcon-0-1x_U007emarketing-0-0-85-220-10.png/690x0w.jpg"
                                        style={{ width: "100px", height: "100px", marginBottom: "30px" }}
                                    />

                                    <Typography variant="h5">Siga Fatec Pocket</Typography>

                                    <TextField
                                        id="usuario"
                                        label="Usuario (XXXXXXXXXSP)"
                                        defaultValue={this.state.usuario}
                                        onChange={this.handleChange}
                                        margin="normal"
                                        variant="outlined"
                                        helperText="O mesmo usuário que você acessa o SIGA"
                                        style={{ width: "100%" }}
                                    />

                                    <TextField
                                        id="senha"
                                        label="Senha"
                                        defaultValue={this.state.usuario}
                                        onChange={this.handleChange}
                                        margin="normal"
                                        variant="outlined"
                                        type="password"
                                        style={{ width: "100%" }}
                                    />

                                    <br />

                                    <Button variant="contained" color="primary" style={{ width: "100%" }} onClick={this.fazerLogin}>
                                        LOGIN
                                        <LoginIcon style={{ marginLeft: "5px" }} />
                                    </Button>

                                    <Row center="xs" style={{ marginTop: "20px" }}>
                                        <Col xs={12}>
                                            <a href="https://itunes.apple.com/us/app/fatec-pocket/id1448106957" target="_blank"><img src="https://github.com/BrunoEleodoro/Siga-Fatec-Pocket/blob/master/button-macappstore.png?raw=true" height="50px" /></a>
                                            <a href="https://play.google.com/store/apps/details?id=com.brunoeleodoro.me.fatecpocket" target="_blank"><img src="https://github.com/BrunoEleodoro/Siga-Fatec-Pocket/blob/master/get%20it.png?raw=true" height="50px" /></a>
                                        </Col>
                                    </Row>
                                </GridMaterial>
                            </CardContent>
                        </Card>
                    </Col>

                </Row>
            </Grid >
        )
    }
}