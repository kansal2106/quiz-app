import React, { Component } from 'react'

export default class Parent extends Component {
    state = {
        tableData: []
    }
    constructor() {
        super();
        
    }
    componentDidMount() {
        fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then((json) => this.setState({tableData: json}));
        console.log('table data :'+ this.state.tableData);
    }
    
    render() {
        return (
            <div>
                <h4>Inside Parent Component</h4>
                <table>
                    <tr>
                        <th>userId</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                    {this.state.tableData.map((tableValue,tableKey) => {
                        return (
                            <tr>
                                <td>{tableValue.id}</td>
                                <td>{tableValue.title}</td>
                                <td>{tableValue.body}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        )
    }
}

