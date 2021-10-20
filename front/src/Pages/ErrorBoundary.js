import React from 'react';
import { Redirect } from 'react-router';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, redirect: false };
    }

    static getDerivedStateFromError(error) {
        
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        setTimeout(() => {
            this.setState({
                redirect: true
            })
        }, 2000);
    }

    render() {
        if (this.state.hasError) {
            return <>
            <h1>{this.props.text}</h1>
            <p>Вы будете перенапрвлены на домашнюю страницу  через 2 секунд</p>
            {this.state.redirect && <Redirect to="/" />}
        </>}
        return this.props.children;
    }
}