import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Avatar from '@material-ui/core/Avatar';
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import GridMaterial from "@material-ui/core/Grid";
import { Paper, Table, TableHead, TableBody, TableRow, TableCell, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

export default class ClassHours extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <List aria-label="Horário das aulas" dense={true}>
                {this.props.class_hours.map((class_hour) => {
                    return (
                        <ListItem>
                            <ListItemText
                                primary={<Typography type="body2" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{class_hour.disciplina}</Typography>}
                                secondary={<Typography type="body2" style={{ color: '#FFFFFF' }}>{class_hour.horario}</Typography>} />
                        </ListItem>
                    );
                })}
            </List>
        </div>)
    }
}