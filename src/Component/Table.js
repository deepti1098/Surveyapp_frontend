import React, { Component } from 'react'

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = { data: this.props.data };
    }

    getKeys = function () {
        if (this.props.data.length > 0)
            return Object.keys(this.props.data[0]);
        return null;
    }

    getHeader = function () {
        var keys = this.getKeys();
        if (keys != null)
            return keys.map((key, index) => {
                return <th key={key}>{key.toUpperCase()}</th>
            })
    }

    getRowsData = function (idx) {
        if (this.props.data.length > 0)
            return this.props.data.map((obj, idx) => {
                return <tr>{Object.keys(obj).map((key, idx) => {
                    return <td key={obj[key]}>{obj[key]}</td>
                })}</tr>
            });
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.getRowsData(0)}
                    </tbody>
                </table>
            </div>
        )
    }
}

