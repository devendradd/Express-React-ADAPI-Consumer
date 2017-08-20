import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import cors from 'cors';

export default class Index extends React.Component{

    constructor(props){
        super(props);

        this.go = this.go.bind(this);
    }

    go(){
        console.log("from go method");
        console.log(this.search.value);
        axios.get('http://localhost:8080/api').then(response => {
            console.log(response.data);
        });
        
                
        console.log("request end");
    }
    render(){
        return(
            <div>
                <h1> Hello from App </h1>
                <input type="text" ref = {search  => this.search = search} />
                <button onClick={this.go}>Go..!</button>
            </div>
        );
    }
}