import React, { Component } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { SidebarMenu } from './SidebarMenu';

export class SidebarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }

    render() {
        return (
            <div>
                <div className="card">
                    <Sidebar visible={this.state.visible} onHide={() => this.setState({visible: false})}>
                        <SidebarMenu/>
                    </Sidebar>
                </div>
            </div>
        )
    }
}