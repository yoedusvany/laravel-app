import React, { Component } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Link, useHistory } from "react-router-dom";

export default class Header extends Component {
    render(){
        const leftContents = (
            <React.Fragment>
                <i style={{ 'fontSize': '1.5em' }} className="pi pi-bars p-toolbar-separator p-mr-2" />
                <Button label="Books" className="p-mr-2">
                </Button>
            </React.Fragment>
        );
        const rightContents = (
            <React.Fragment>
                <Button icon="pi pi-search" className="p-mr-2" />
                <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
                <Button icon="pi pi-times" className="p-button-danger" />
            </React.Fragment>
        );

  
        return (
            <header className="App-header">
                <Toolbar left={leftContents} right={rightContents} />
            </header>
        )
    }
}