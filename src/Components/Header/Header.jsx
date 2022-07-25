import React,{Component} from "react";
import './Header.css';

export class Header extends Component{

    render(){
        return(
            <div className="head container-fluid text-light p-5">
                <h1>hello</h1>
                <p >hello</p>
                <button type="button" className="btn btn-light">Light</button>

            </div>
        )
    }
}