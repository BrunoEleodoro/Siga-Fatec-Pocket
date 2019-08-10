import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Avatar from '@material-ui/core/Avatar';
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import GridMaterial from "@material-ui/core/Grid";
import { Paper, Table, TableHead, TableBody, TableRow, TableCell, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
var PieChart = require("react-chartjs").Pie;

export default class MissClasses extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (<div>
            <Row center="xs">
                {this.props.miss_classes.map((miss_class) => {
                    return (<Col xs={6}>
                        <Card style={{ backgroundColor: "#303345", padding: '10px' }} elevation={0}>

                            <Typography variant="body1" style={{ color: 'white' }}>{miss_class.disciplina}</Typography>
                            <br />
                            <PieChart data={[{
                                value: miss_class.faltas,
                                color: "#F7464A",
                                highlight: "#FF5A5E",
                                label: "Faltas"
                            },
                            {
                                value: (100 - miss_class.faltas),
                                color: "#46BFBD",
                                highlight: "#5AD3D1",
                                label: "Presenças"
                            }]} options={{
                                legend: {
                                    display: true,
                                    labels: {
                                        fontColor: 'rgb(255, 99, 132)'
                                    }
                                },
                                //Boolean - Whether we should show a stroke on each segment
                                segmentShowStroke: true,

                                //String - The colour of each segment stroke
                                segmentStrokeColor: "#fff",

                                //Number - The width of each segment stroke
                                segmentStrokeWidth: 2,

                                //Number - The percentage of the chart that we cut out of the middle
                                percentageInnerCutout: 50, // This is 0 for Pie charts

                                //Number - Amount of animation steps
                                animationSteps: 100,

                                //String - Animation easing effect
                                animationEasing: "easeOutBounce",

                                //Boolean - Whether we animate the rotation of the Doughnut
                                animateRotate: true,

                                //Boolean - Whether we animate scaling the Doughnut from the centre
                                animateScale: false,
                                tooltipTemplate: "<%= value %>%",
                                legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
                            }} />
                            <Typography variant="body1" style={{ color: 'white' }}>Presenças - {miss_class.presencas}</Typography>
                            <Typography variant="body1" style={{ color: 'white' }}>Faltas - {miss_class.faltas}</Typography>

                        </Card>
                    </Col>)
                })}


            </Row>
        </div >)
    }
}