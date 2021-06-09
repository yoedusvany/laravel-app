import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import BookService from '../../services/BookService';

export class BookList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: []
        };

        this.columns = [
            {field: 'name', header: 'Name'},
            {field: 'desc', header: 'Desc'},
        ];

        this.bookService = new BookService();
    }

    componentDidMount() {
        this.bookService.getProducts().then(data => this.setState({ products: data }));
    }

    render() {
        const dynamicColumns = this.columns.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <div className="card">
                    <DataTable value={this.state.books}>
                        {dynamicColumns}
                    </DataTable>
                </div>
            </div>
        );
    }
}