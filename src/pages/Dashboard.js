import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Avatar from '@material-ui/core/Avatar';
import { Card, IconButton, Button, CardContent, Typography, Divider, CircularProgress, MenuItem, InputLabel, FormControl, Select } from "@material-ui/core";
import GridMaterial from "@material-ui/core/Grid";
import LeftPanel from "./LeftPanel";
import ClassHours from "./ClassHours";
import MissClasses from "./MissClasses";
import TimeIcon from "@material-ui/icons/TimerOutlined"
import RefreshIcon from "@material-ui/icons/RefreshOutlined"
import styled, { keyframes } from "styled-components";
import FadeIn from "react-animations";
import SubjectResources from "./SubjectResources";
import TestResults from "./TestResults";
import DatePicker from "react-datepicker";
import { updateBasicInfo, updateClassHours, updateMissClasses, updateSubjects, updateSubjectResources, updateTestResults } from "../api/Update";
import "react-datepicker/dist/react-datepicker.css";
import ExitIcon from "@material-ui/icons/ExitToAppOutlined"
import Fade from "@material-ui/core/Fade"
import FolderIcon from "@material-ui/icons/FolderOpenOutlined"
import PieChartIcon from "@material-ui/icons/PieChartOutlined"
import BarChartIcon from "@material-ui/icons/BarChartOutlined"
import { Animate } from "react-simple-animate"
import ReactGA from "react-ga"
const FadeInAnimation = keyframes`${FadeIn}`;
const FadeInDiv = styled.div`
  animation: infinite 5s ${FadeInAnimation};
`;

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            basic_info: {},
            subjects: [],
            class_hours: [],
            miss_classes: [],
            test_results: [],
            subject_resources: [],
            class_hours_today: [],
            miss_classes_today: [],
            subject_resources_today: [],
            mock: false,
            isLoading: [],
            selectedDay: "",
            test_results_subjects: [],
            subjects_tests: []
        }



    }
    handleChange = (e) => {
        this.state[e.target.id] = e.target.value
        this.setState({ reload: true })
    }

    purpleBar() {
        return (<Col xs={12}>
            <div style={{ marginTop: '5px', borderRadius: '5px', backgroundColor: "#a64ed0", height: "5px", width: '100%', marginLeft: '-6px' }}></div>
        </Col>);
    }

    componentDidMount() {
        ReactGA.initialize('UA-145398422-1');
        this.state.isLoading['basic_info'] = false;
        this.state.isLoading['class_hours'] = false;
        this.state.isLoading['miss_classes'] = false;
        this.state.isLoading['subjects'] = false;
        this.state.isLoading['test_results'] = false;
        this.state.isLoading['subject_resources'] = false;
        this.state.selectedDay = new Date().getDay() + 1
        console.log(this.state.selectedDay)
        if (!this.state.mock) {
            this.loadData();
        }
        this.initData();
        this.separateTestResults();
        ReactGA.event({
            category: 'Dashboard',
            action: 'Dashboard opened'
        });
    }
    separateTestResults = () => {
        var i = 0;
        var test_results_subjects_generated = []
        var subjects_tests_generated = []
        while (i < this.state.test_results.length) {
            var test_result = this.state.test_results[i]
            if (test_results_subjects_generated[test_result.disciplina] == null) {

                test_results_subjects_generated[test_result.disciplina] = true
                subjects_tests_generated[test_result.disciplina] = []
                subjects_tests_generated[test_result.disciplina].push(test_result)

            } else {
                subjects_tests_generated[test_result.disciplina].push(test_result)
            }

            i++;
        }
        this.state.test_results_subjects = test_results_subjects_generated
        this.state.subjects_tests = subjects_tests_generated
        this.setState({ reload: true })
    }
    initData(day) {
        console.log(day)
        if (day == "") {
            day = new Date().getDay() + 1
        }
        if (this.state.class_hours != undefined && this.state.class_hours.length > 0) {
            this.setClassHoursToday(day)
        }
        if (this.state.miss_classes != undefined && this.state.miss_classes.length > 0) {
            this.setMissClassesToday();
        }
        if (this.state.subject_resources != undefined && this.state.subject_resources.length > 0) {
            this.setSubjectResourcesToday();
        }

    }
    logout = () => {
        localStorage.removeItem("basic_info")
        localStorage.removeItem("class_hours")
        localStorage.removeItem("miss_classes")
        localStorage.removeItem("subjects")
        localStorage.removeItem("subject_resources")
        localStorage.removeItem("test_results")
        localStorage.removeItem("usuario")
        localStorage.removeItem("senha")
        window.location.reload(true);
    }
    async loadData() {
        if (localStorage.getItem("basic_info") != undefined) {

            this.state.basic_info = JSON.parse(localStorage.getItem("basic_info"))
            this.state.class_hours = JSON.parse(localStorage.getItem("class_hours"))
            this.state.miss_classes = JSON.parse(localStorage.getItem("miss_classes"))
            this.state.subjects = JSON.parse(localStorage.getItem("subjects"))
            this.state.subject_resources = JSON.parse(localStorage.getItem("subject_resources"))
            this.state.test_results = JSON.parse(localStorage.getItem("test_results"))
            this.initData();
        } else {
            this.loadDataFromApi()
        }
    }
    async loadDataFromApi() {

        this.myUpdateBasicInfo()
        this.myUpdateClassHours()
        this.myUpdateMissClasses()
        this.myUpdateSubjects()
        this.myUpdateTestResults()
        this.myUpdateSubjectResources()

        this.forceUpdate()
    }

    myUpdateBasicInfo = async () => {
        if (this.state.isLoading['basic_info'] != null && this.state.isLoading['basic_info'] == false) {
            this.state.isLoading['basic_info'] = true;
            this.setState({ reload: true })
            var basic_info = await updateBasicInfo()
            if (basic_info == null || basic_info == undefined) {
                window.alert('Login ou senha inválidos')
                this.logout()
                return;
            }
            this.state.basic_info = basic_info
            localStorage.setItem("basic_info", JSON.stringify(this.state.basic_info));
            this.state.isLoading['basic_info'] = false;
            this.setState({ reload: true })
            this.initData();
            var payload = ""
            payload += this.state.basic_info.nome + ", "
            payload += this.state.basic_info.ra + ", "
            payload += this.state.basic_info.fatec + ", "
            payload += this.state.basic_info.curso + ", "
            payload += this.state.basic_info.periodo + ", "
            ReactGA.event({
                category: 'Dashboard',
                action: 'Logado com sucesso, ' + payload
            });
        }
    }
    myUpdateClassHours = async () => {
        if (this.state.isLoading['class_hours'] != null && this.state.isLoading['class_hours'] == false) {
            this.state.isLoading['class_hours'] = true;
            this.setState({ reload: true })
            var class_hours = await updateClassHours()
            this.state.class_hours = class_hours
            localStorage.setItem("class_hours", JSON.stringify(this.state.class_hours));
            this.state.isLoading['class_hours'] = false;
            this.setState({ reload: true })
            this.initData();
        }
    }
    myUpdateMissClasses = async () => {
        if (this.state.isLoading['miss_classes'] != null && this.state.isLoading['miss_classes'] == false) {
            this.state.isLoading['miss_classes'] = true;
            this.setState({ reload: true })
            var miss_classes = await updateMissClasses()
            this.state.miss_classes = miss_classes
            localStorage.setItem("miss_classes", JSON.stringify(this.state.miss_classes));
            this.state.isLoading['miss_classes'] = false;
            this.setState({ reload: true })
            this.initData();
        }
    }
    myUpdateSubjects = async () => {
        if (this.state.isLoading['subjects'] != null && this.state.isLoading['subjects'] == false) {
            this.state.isLoading['subjects'] = true;
            this.setState({ reload: true })
            var subjects = await updateSubjects()
            this.state.subjects = subjects
            localStorage.setItem("subjects", JSON.stringify(this.state.subjects));
            this.state.isLoading['subjects'] = false;
            this.setState({ reload: true })
            this.initData();
        }
    }
    myUpdateTestResults = async () => {
        if (this.state.isLoading['test_results'] != null && this.state.isLoading['test_results'] == false) {
            this.state.isLoading['test_results'] = true;
            this.setState({ reload: true })
            var test_results = await updateTestResults()
            this.state.test_results = test_results
            localStorage.setItem("test_results", JSON.stringify(this.state.test_results));
            this.state.isLoading['test_results'] = false;
            this.setState({ reload: true })
            this.initData();
        }
    }
    myUpdateSubjectResources = async () => {
        if (this.state.isLoading['subject_resources'] != null && this.state.isLoading['subject_resources'] == false) {
            this.state.isLoading['subject_resources'] = true;
            this.setState({ reload: true })
            var subject_resources = await updateSubjectResources()
            this.state.subject_resources = subject_resources
            localStorage.setItem("subject_resources", JSON.stringify(this.state.subject_resources));
            this.state.isLoading['subject_resources'] = false;
            this.setState({ reload: true })
            this.initData();
        }
    }

    setClassHoursToday(day) {
        var class_hours_today_generated = []
        var hoje = day || new Date().getDay() + 1;
        var i = 0;
        while (i < this.state.class_hours.length) {
            var class_hour = this.state.class_hours[i]
            if (class_hour.dia_semana_number == hoje) {
                class_hours_today_generated.push(class_hour);
            }
            i++;
        }
        this.state.class_hours_today = class_hours_today_generated;
        this.setState({ reload: true })
    }
    setMissClassesToday() {
        var miss_classes_today_generated = []
        var i = 0;
        while (i < this.state.miss_classes.length) {
            var miss_class = this.state.miss_classes[i];
            if (this.state.class_hours_today.map(function (e) { return e.sigla; }).indexOf(miss_class.sigla) != -1) {
                miss_classes_today_generated.push(miss_class)
            }
            i++;
        }
        this.setState({ miss_classes_today: miss_classes_today_generated })
    }
    setSubjectResourcesToday() {
        var subject_resources_today_generated = []
        var i = 0;
        while (i < this.state.subject_resources.length) {
            var subject_resource = this.state.subject_resources[i];
            if (this.state.class_hours_today.map(function (e) { return e.sigla; }).indexOf(subject_resource.sigla) != -1) {
                subject_resources_today_generated.push(subject_resource)
            }
            i++;
        }
        this.setState({ subject_resources_today: subject_resources_today_generated })
    }
    render() {
        return (
            <Grid fluid style={{ height: '100vh', backgroundColor: "#303030" }}>
                {/* <Row style={{ height: '100vh' }} center="xs"> */}
                <Row style={{ height: '100vh' }}>
                    <Col lg={3} md={12} sm={12}>
                        <form target="_blank" action="https://pagseguro.uol.com.br/checkout/v2/donation.html" method="post">
                            <input type="hidden" name="currency" value="BRL" />
                            <input type="hidden" name="receiverEmail" value="brunoeleodoro96@gmail.com" />
                            <input type="hidden" name="iot" value="button" />
                            <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/120x53-doar.gif" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" />
                        </form>
                        <Animate
                            play={true}
                            start={{ opacity: 0, filter: 'blur(0)' }}
                            end={{ opacity: 1, filter: 'blur(0)' }}
                            duration={1}
                        >
                            <Card style={{ height: "auto", marginTop: "20px", backgroundColor: "#303345" }} elevation={10}>
                                <CardContent>
                                    {(this.state.isLoading['basic_info']) ?
                                        <Row center="xs"><CircularProgress /></Row> :
                                        <LeftPanel basic_info={this.state.basic_info} />}

                                    <Divider height="2px" style={{ backgroundColor: 'white' }} />

                                    <br />
                                    <Typography variant="h6" style={{ color: 'white' }}>Dia da Semana</Typography>
                                    <FormControl style={{ backgroundColor: "white", width: "100%", padding: '5px', borderRadius: '5px' }}>
                                        <InputLabel htmlFor="age-simple">Dia</InputLabel>
                                        <Select
                                            value={this.state.selectedDay}
                                            defaultChecked={this.state.selectedDay}
                                            onChange={(e) => {
                                                this.setState({ selectedDay: e.target.value })
                                                this.initData(e.target.value)
                                                this.setState({ reload: true })
                                            }}
                                            inputProps={{
                                                name: 'dia_semana',
                                                id: 'dia_semana',
                                            }}
                                        >
                                            <MenuItem value={2}>Segunda</MenuItem>
                                            <MenuItem value={3}>Terça</MenuItem>
                                            <MenuItem value={4}>Quarta</MenuItem>
                                            <MenuItem value={5}>Quinta</MenuItem>
                                            <MenuItem value={6}>Sexta</MenuItem>
                                            <MenuItem value={7}>Sábado</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <br /><br />
                                    <Button variant="contained" color="secondary" onClick={this.logout}>
                                        Sair
                                        <ExitIcon style={{ marginLeft: "5px" }} />
                                    </Button>
                                </CardContent>
                            </Card>
                        </Animate>
                        <Animate
                            play={true}
                            duration={1.3}
                            start={{ opacity: 0, filter: 'blur(0)' }}
                            end={{ opacity: 1, filter: 'blur(0)' }}
                        >
                            <Card style={{ height: 'auto', marginTop: "20px", backgroundColor: "#303345" }} elevation={10}>
                                <CardContent>
                                    <Row between="xs" middle="xs">
                                        <TimeIcon style={{ margin: "3px 5px 3px 10px", color: 'white' }} />
                                        <Typography variant="h5" style={{ color: 'white' }}>Horário das aulas</Typography>
                                        <IconButton aria-label="Atualizar" onClick={this.myUpdateClassHours}>
                                            <RefreshIcon style={{ color: 'white' }} />
                                        </IconButton>
                                    </Row>
                                    {this.purpleBar()}
                                    <br /><br />
                                    {(this.state.isLoading['class_hours']) ?
                                        <Row center="xs"><CircularProgress /></Row> :
                                        <ClassHours class_hours={this.state.class_hours_today} />}
                                </CardContent>
                            </Card>
                        </Animate>

                    </Col>

                    <Col lg={6} md={12} sm={12}>
                        <Animate
                            play={true}
                            start={{ opacity: 0, filter: 'blur(0)' }}
                            end={{ opacity: 1, filter: 'blur(0)' }}
                            duration={1.5}
                        >
                            <Card style={{ height: 'auto', marginTop: "20px", backgroundColor: "#303345" }} elevation={10}>
                                <CardContent>
                                    <Row between="xs" middle="xs">
                                        <PieChartIcon style={{ margin: "3px 5px 3px 10px", color: 'white' }} />
                                        <Typography variant="h5" style={{ color: 'white' }}>Faltas</Typography>
                                        <IconButton aria-label="Atualizar" onClick={this.myUpdateMissClasses}>
                                            <RefreshIcon style={{ color: 'white' }} />
                                        </IconButton>
                                    </Row>
                                    {this.purpleBar()}
                                    <br /><br /><br />
                                    {(this.state.isLoading['miss_classes']) ?
                                        <Row center="xs"><CircularProgress /></Row> :
                                        <MissClasses miss_classes={this.state.miss_classes_today} />}

                                    {/* <br />
                                <ClassHours class_hours={this.state.class_hours} /> */}
                                </CardContent>
                            </Card>
                        </Animate>
                        <Animate
                            play={true}
                            start={{ opacity: 0, filter: 'blur(0)' }}
                            end={{ opacity: 1, filter: 'blur(0)' }}
                            duration={1.7}
                        >
                            <Card style={{ height: 'auto', marginTop: "20px", backgroundColor: "#303345" }} elevation={10}>
                                <CardContent>
                                    <Row between="xs" middle="xs">
                                        <FolderIcon style={{ margin: "3px 5px 3px 10px", color: 'white' }} />
                                        <Typography variant="h5" style={{ color: 'white' }}>Material das aulas</Typography>
                                        <IconButton aria-label="Atualizar" onClick={this.myUpdateSubjectResources}>
                                            <RefreshIcon style={{ color: 'white' }} />
                                        </IconButton>
                                    </Row>
                                    {this.purpleBar()}
                                    <br /><br /><br />
                                    {(this.state.isLoading['subject_resources']) ?
                                        <Row center="xs"><CircularProgress /></Row> :
                                        <SubjectResources subject_resources={this.state.subject_resources_today} />}

                                </CardContent>
                            </Card>
                        </Animate>
                    </Col>

                    <Col lg={3} md={12} sm={12}>
                        <Animate
                            play={true}
                            start={{ opacity: 0, filter: 'blur(0)' }}
                            end={{ opacity: 1, filter: 'blur(0)' }}
                            duration={1.8}
                        >
                            <Card style={{ height: 'auto', marginTop: "20px", backgroundColor: "#303345" }} elevation={10}>
                                <CardContent>
                                    <Row between="xs" middle="xs">
                                        <BarChartIcon style={{ margin: "3px 5px 3px 10px", color: 'white' }} />
                                        <Typography variant="h5" style={{ color: 'white' }}>Notas</Typography>
                                        <IconButton aria-label="Atualizar" onClick={this.myUpdateTestResults}>
                                            <RefreshIcon style={{ color: 'white' }} />
                                        </IconButton>
                                    </Row>
                                    {this.purpleBar()}
                                    {(this.state.isLoading['test_results']) ?
                                        <Row center="xs"><CircularProgress /></Row> :
                                        <TestResults
                                            test_results={this.state.test_results}
                                            test_results_subjects={this.state.test_results_subjects}
                                            subjects_tests={this.state.subjects_tests}
                                        />}
                                    <br /><br />
                                </CardContent>
                            </Card>
                        </Animate>
                    </Col>
                </Row>
            </Grid >
        );
    }
}