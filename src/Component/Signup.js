import React, { Component } from 'react'
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import TextField from '@mui/joy/TextField';

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = { Username: "", Email: "", Password: "", CPassword: "", ErrorMessage: "" }
    }
    handleInputChange(event) {
        if (event.currentTarget.name == "username") {
            this.setState({ Username: event.target.value })
        }
        else if (event.currentTarget.name == "email") {
            this.setState({ Email: event.target.value })
        }
        else if (event.currentTarget.name == "password") {
            this.setState({ Password: event.target.value })
        }
        else if (event.currentTarget.name == "Cpassword") {
            this.setState({ CPassword: event.target.value })
        }
    }

    handleClick() {

        if (this.state.Password != this.state.CPassword) {
            this.setState({ ErrorMessage: "Password didn't match" })
        }
        else {
            fetch('http://localhost:8081/users/register',
                {
                    method: 'POST',
                    headers: {

                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: this.state.Username,
                        emailId: this.state.Email,
                        password: this.state.Password

                    })
                }
            ).then(res => res.json()).then(result => console.log(result)).catch(console.log);
        }
    }

    render() {
        return (
            <Sheet
                variant="outlined"
                sx={
                    {
                        maxWidth: 400,
                        mx: 'auto', // margin left & right
                        my: 4, // margin top & botom
                        py: 3, // padding top & bottom
                        px: 2, // padding left & right
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                    }
                }
            >
                Signup Here!
                <TextField
                    name="username"
                    value={this.state.Username}
                    type="text"
                    placeholder="username"
                    label="Username"
                    onChange={this.handleInputChange}

                />
                <TextField
                    name="email"
                    value={this.state.Email}
                    type="email"
                    placeholder="johndoe@email.com"
                    label="Email"
                    onChange={this.handleInputChange}

                />
                <TextField
                    name="password"
                    value={this.state.Password}
                    type="password"
                    placeholder="password"
                    label="Password"
                    onChange={this.handleInputChange}

                />
                <TextField
                    name="Cpassword"
                    value={this.state.CPassword}
                    type="password"
                    placeholder="Confirm password"
                    label="Confirm Password"
                    onChange={this.handleInputChange}

                />
                {this.state.ErrorMessage}
                <Button onClick={this.handleClick}
                    sx={{
                        mt: 1, // margin top
                        backgroundColor: 'blue',
                    }}
                >
                    Sign up
                </Button>
                <Typography
                    endDecorator={<Link href="/">Log in</Link>}
                    fontSize="sm"
                    sx={{ alignSelf: 'center' }}
                >
                    Already have an account?
                </Typography>
            </Sheet >
        )
    }
}
