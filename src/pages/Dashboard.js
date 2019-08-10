import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Avatar from '@material-ui/core/Avatar';
import { Card, IconButton, CardContent, Typography, Divider, CircularProgress } from "@material-ui/core";
import GridMaterial from "@material-ui/core/Grid";
import LeftPanel from "./LeftPanel";
import ClassHours from "./ClassHours";
import MissClasses from "./MissClasses";
import TimeIcon from "@material-ui/icons/TimerOutlined"
import RefreshIcon from "@material-ui/icons/RefreshOutlined"
import styled, { keyframes } from "styled-components";
import FadeIn from "react-animations";
import SubjectResources from "./SubjectResources";
import { updateBasicInfo, updateClassHours, updateMissClasses, updateSubjects, updateSubjectResources, updateTestResults } from "../api/Update";
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
            isLoading: []
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
        if (!this.state.mock) {
            this.loadData();
        }
        this.initData();
    }
    initData() {
        if (this.state.class_hours != undefined && this.state.class_hours.length > 0) {
            this.setClassHoursToday(new Date().getDay() + 1)
        }
        if (this.state.miss_classes != undefined && this.state.miss_classes.length > 0) {
            this.setMissClassesToday();
        }
        if (this.state.subject_resources != undefined && this.state.subject_resources.length > 0) {
            this.setSubjectResourcesToday();
        }

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
        this.state.isLoading['basic_info'] = true;
        this.state.isLoading['class_hours'] = true;
        this.state.isLoading['miss_classes'] = true;
        this.state.isLoading['subjects'] = true;
        this.state.isLoading['subject_resources'] = true;
        this.state.isLoading['test_results'] = true;

        this.myUpdateBasicInfo()
        this.myUpdateClassHours()
        this.myUpdateMissClasses()
        this.myUpdateSubjects()
        this.myUpdateTestResults()
        this.myUpdateSubjectResources()

        this.forceUpdate()
    }

    async myUpdateBasicInfo() {
        var basic_info = await updateBasicInfo()
        this.state.basic_info = basic_info
        localStorage.setItem("basic_info", JSON.stringify(this.state.basic_info));
        this.state.isLoading['basic_info'] = false;
        this.setState({ reload: true })
        this.initData();
    }
    async myUpdateClassHours() {
        var class_hours = await updateClassHours()
        this.state.class_hours = class_hours
        localStorage.setItem("class_hours", JSON.stringify(this.state.class_hours));
        this.state.isLoading['class_hours'] = false;
        this.setState({ reload: true })
        this.initData();
    }
    async myUpdateMissClasses() {
        var miss_classes = await updateMissClasses()
        this.state.miss_classes = miss_classes
        localStorage.setItem("miss_classes", JSON.stringify(this.state.miss_classes));
        this.state.isLoading['miss_classes'] = false;
        this.setState({ reload: true })
        this.initData();
    }
    async myUpdateSubjects() {
        var subjects = await updateSubjects()
        this.state.subjects = subjects
        localStorage.setItem("subjects", JSON.stringify(this.state.subjects));
        this.state.isLoading['subjects'] = false;
        this.setState({ reload: true })
        this.initData();
    }
    async myUpdateTestResults() {
        var test_results = await updateTestResults()
        this.state.test_results = test_results
        localStorage.setItem("test_results", JSON.stringify(this.state.test_results));
        this.state.isLoading['test_results'] = false;
        this.setState({ reload: true })
        this.initData();
    }
    async myUpdateSubjectResources() {
        var subject_resources = await updateSubjectResources()
        this.state.subject_resources = subject_resources
        localStorage.setItem("subject_resources", JSON.stringify(this.state.subject_resources));
        this.state.isLoading['subject_resources'] = false;
        this.setState({ reload: true })
        this.initData();
    }

    setClassHoursToday(day) {
        var class_hours_today_generated = []
        var hoje = day || new Date().getDay();
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
                        <FadeInDiv>
                            <Card style={{ height: "250px", marginTop: "20px", backgroundColor: "#303345" }} elevation={10}>
                                <CardContent>
                                    {(this.state.isLoading['basic_info']) ?
                                        <CircularProgress /> :
                                        <LeftPanel basic_info={this.state.basic_info} />}

                                    <Divider height="2px" style={{ backgroundColor: 'white' }} />
                                </CardContent>
                            </Card>
                            <Card style={{ height: 'auto', marginTop: "20px", backgroundColor: "#303345" }} elevation={10}>
                                <CardContent>
                                    <Row between="xs" middle="xs">
                                        <TimeIcon style={{ margin: "3px 5px 3px 10px", color: 'white' }} />
                                        <Typography variant="h5" style={{ color: 'white' }}>Horário das aulas</Typography>
                                        <IconButton aria-label="Atualizar" onClick={() => { }}>
                                            <RefreshIcon style={{ color: 'white' }} />
                                        </IconButton>
                                    </Row>
                                    {this.purpleBar()}
                                    <br /><br />
                                    {(this.state.isLoading['class_hours']) ?
                                        <CircularProgress /> :
                                        <ClassHours class_hours={this.state.class_hours_today} />}
                                </CardContent>
                            </Card>
                        </FadeInDiv>
                    </Col>

                    <Col lg={6} md={12} sm={12}>
                        <Card style={{ height: '450px', marginTop: "20px", backgroundColor: "#303345" }} elevation={10}>
                            <CardContent>
                                <Row between="xs" middle="xs">
                                    <TimeIcon style={{ margin: "3px 5px 3px 10px", color: 'white' }} />
                                    <Typography variant="h5" style={{ color: 'white' }}>Faltas</Typography>
                                    <IconButton aria-label="Atualizar" onClick={() => { }}>
                                        <RefreshIcon style={{ color: 'white' }} />
                                    </IconButton>
                                </Row>
                                {this.purpleBar()}
                                <br /><br /><br />
                                {(this.state.isLoading['miss_classes']) ?
                                    <CircularProgress /> :
                                    <MissClasses miss_classes={this.state.miss_classes_today} />}

                                {/* <br />
                                <ClassHours class_hours={this.state.class_hours} /> */}
                            </CardContent>
                        </Card>

                        <Card style={{ height: 'auto', marginTop: "20px", backgroundColor: "#303345" }} elevation={10}>
                            <CardContent>
                                <Row between="xs" middle="xs">
                                    <TimeIcon style={{ margin: "3px 5px 3px 10px", color: 'white' }} />
                                    <Typography variant="h5" style={{ color: 'white' }}>Material das aulas</Typography>
                                    <IconButton aria-label="Atualizar" onClick={() => { }}>
                                        <RefreshIcon style={{ color: 'white' }} />
                                    </IconButton>
                                </Row>
                                {this.purpleBar()}
                                <br /><br /><br />
                                {(this.state.isLoading['subject_resources']) ?
                                    <CircularProgress /> :
                                    <SubjectResources subject_resources={this.state.subject_resources_today} />}

                            </CardContent>
                        </Card>
                    </Col>

                    <Col lg={3} md={12} sm={12}>
                        <Card style={{ height: '500px', marginTop: "20px", backgroundColor: "#303345" }} elevation={10}>
                            <CardContent>
                                <Row between="xs" middle="xs">
                                    <TimeIcon style={{ margin: "3px 5px 3px 10px", color: 'white' }} />
                                    <Typography variant="h5" style={{ color: 'white' }}>Notas</Typography>
                                    <IconButton aria-label="Atualizar" onClick={() => { }}>
                                        <RefreshIcon style={{ color: 'white' }} />
                                    </IconButton>
                                </Row>
                                {this.purpleBar()}
                                {(this.state.isLoading['test_results']) ?
                                    <CircularProgress /> :
                                    ""}
                                {/* <br />
                                <ClassHours class_hours={this.state.class_hours} /> */}
                            </CardContent>
                        </Card>
                    </Col>
                </Row>
            </Grid >
        );
    }
}