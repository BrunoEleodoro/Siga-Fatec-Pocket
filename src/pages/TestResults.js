import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Avatar from '@material-ui/core/Avatar';
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import GridMaterial from "@material-ui/core/Grid";
import { Paper, Table, TableHead, TableBody, TableRow, TableCell, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ReactMinimalPieChart from "react-minimal-pie-chart"
import { MenuItem, FormHelperText, Input, Select, InputLabel, FormControl, OutlinedInput } from "@material-ui/core"
import Slider from "react-slick";

export default class TestResults extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // adaptiveHeight: true
        };
        return (<div style={{ marginTop: "30px", marginLeft: "10px", marginRight: "10px" }}>
            <Slider {...settings}>
                {Object.keys(this.props.test_results_subjects).map((test_result_subject) => {
                    return (<div>
                        <Row center="xs">
                            <Typography variant="body1" style={{ color: 'white', marginTop: '20px' }}>{test_result_subject}</Typography>
                        </Row>
                        <Row center="xs">
                            <Col xs={6}>
                                <ReactMinimalPieChart
                                    data={[
                                        {
                                            value: 10 - this.props.subjects_tests[test_result_subject][0].nota,
                                            color: '#cfcfcf'
                                        },
                                        {
                                            value: this.props.subjects_tests[test_result_subject][0].nota,
                                            color: '#b2ff59'
                                        }
                                    ]}
                                    lineWidth={30}
                                    rounded
                                    animate
                                    style={{ marginTop: '20px' }}
                                />
                                <br />
                                <Typography variant="body1" style={{ color: 'white', marginTop: '20px' }}> Média - {this.props.subjects_tests[test_result_subject][0].nota} </Typography>
                                <br />

                            </Col>
                        </Row>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ color: 'white' }}>Avaliação</TableCell>
                                    <TableCell style={{ color: 'white' }}>Nota</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.subjects_tests[test_result_subject].map((subject_test) => {
                                    return (
                                        <TableRow>
                                            <TableCell style={{ color: 'white' }}>{subject_test.avaliacao}</TableCell>
                                            <TableCell style={{ color: 'white' }}>{subject_test.nota}</TableCell>
                                        </TableRow>
                                    )
                                })}


                            </TableBody>
                        </Table>
                    </div>)
                })}

            </Slider>

        </div>)
    }
}