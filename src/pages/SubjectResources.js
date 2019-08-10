import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Avatar from '@material-ui/core/Avatar';
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import GridMaterial from "@material-ui/core/Grid";
import { IconButton, Paper, Table, TableHead, TableBody, TableRow, TableCell, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DownloadIcon from "@material-ui/icons/CloudDownloadOutlined"

export default class SubjectResources extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ color: 'white' }}>Disciplina</TableCell>
                        <TableCell style={{ color: 'white' }}>Titulo</TableCell>
                        <TableCell style={{ color: 'white' }}>Download</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.subject_resources.map(subject_resource => (
                        <TableRow key={subject_resource.url}>
                            <TableCell style={{ color: 'white' }}>
                                {subject_resource.disciplina}
                            </TableCell>
                            <TableCell style={{ color: 'white' }}>{subject_resource.titulo}</TableCell>
                            <TableCell style={{ color: 'white' }}>
                                <IconButton aria-label="download" onClick={() => {
                                    window.open(subject_resource.url, '_blank');
                                }}>
                                    <DownloadIcon style={{ color: 'white' }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>)
    }
}