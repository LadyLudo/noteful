import React from 'react'

class ServerError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
       if(this.state.hasError) {
           return (
               <h2>The server is not responding</h2>
           );
       }
       return this.props.children;
    }
}

export default ServerError