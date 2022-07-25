import React, { Component } from "react";
import Cards from '../Cards/Cards'
import './Portofolio.css';
export class Portofolio extends Component {

    render() {
        return (
            <>
                    <div className="row">
                        <Cards  paint="rgb(149 145 136)" title="WEB Design" />
                        <Cards  paint="rgb(64 64 64)" title="MOBILE Design" />
                        <Cards  paint="rgb(149 145 136)" title="LOGO Design" />

                    </div>

                    <div className="row ">
                        <Cards paint="rgb(64 64 64)" title="WEB APPLICATION DEVELOPMENT" />
                        <Cards paint="rgb(149 145 136)" title="MOBILE APPLICATION CEVELOPMENT " />
                        <Cards paint="rgb(64 64 64)" title="PWA DEELOPMENT " />
                    </div>
            </>
        );
    }
}