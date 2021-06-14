import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { JolocomWebServiceClient } from '@jolocom/web-service-client'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        /**
         * original API endpoint
        fetch("/testAPI")
        */
        /**
         * Jolocom HAPI plugin Websocket with plain REST route provided
         */
        fetch("/foo", {
            body: '{ "/foo": 42 }',
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
            })
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res.at }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">API backend test (expected 'foo'): {this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;
