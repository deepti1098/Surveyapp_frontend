import React, { Component } from 'react'
import Table from './Table';
import Login from './Login';
import Signup from './Signup';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    getFetchUsers() {
        this.setState({
            loading: true
        }, () => {
            fetch("http://localhost:8081/users/").then(res => res.json()).then(result => this.setState({
                data: result
            })).catch(console.log);
        });
    }
    componentDidMount() {
        this.getFetchUsers();
    }
    render() {
        return (
            <div>
                {/* <Table data={this.state.data}></Table> */}
            </div>
        )
    }
}



