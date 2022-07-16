// ...other imports
import TextField from '@mui/joy/TextField';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = { Email: "", Password: "", result: "" }
    }
    handleInputChange(event) {
        if (event.currentTarget.name == "email") {
            this.setState({ Email: event.target.value })
        }
        else {
            this.setState({ Password: event.target.value })
        }
    }
    handleClick() {
        fetch('http://localhost:8081/users/login',
            {
                method: 'POST',
                headers: {

                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.Email,
                    password: this.state.Password
                })
            }
        ).then(res => res.json()).then(result => this.setState({ result: result })).catch(console.log);

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
                Login Here!
                {this.state.result.token}
                <TextField
                    // html input attribute
                    name="email"
                    value={this.state.Email}
                    type="email"
                    placeholder="johndoe@email.com"
                    // pass down to FormLabel as children
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

                <Button onClick={this.handleClick}
                    sx={{
                        mt: 1, // margin top
                        backgroundColor: 'blue',
                    }}
                >
                    Log in
                </Button>
                <Typography
                    endDecorator={<Link href="/sign-up">Sign up</Link>}
                    fontSize="sm"
                    sx={{ alignSelf: 'center' }}
                >
                    Don't have an account?
                </Typography>

            </Sheet >


        )
    }
}

