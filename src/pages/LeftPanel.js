import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Avatar from '@material-ui/core/Avatar';
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import GridMaterial from "@material-ui/core/Grid";

export default class LeftPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GridMaterial container style={{ padding: '10px' }}>
                <Row>
                    <Avatar
                        alt="Icon"
                        src={this.props.basic_info.img}
                        style={{ width: "60px", height: "60px", marginBottom: "30px" }}
                    />
                    <Col style={{ marginLeft: "10px" }} xs={8}>
                        <Typography variant="body1" style={{ marginTop: "5px", color: 'white' }}>{this.props.basic_info.nome}</Typography>
                        <Typography variant="caption" style={{ color: 'white' }}>{this.props.basic_info.ra}</Typography>
                    </Col>
                </Row>
                <br />
            </GridMaterial>
        );
    }
}