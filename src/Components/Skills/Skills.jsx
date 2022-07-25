import React, { Component } from "react";
import './Skills.css';
import Prog from '../Progress/Prog'

export class Skills extends Component {

    render() {
        return (
            <div className="container-fluid skills text-light p-5">
                <h2 className="p-3">Skills</h2>
                <p className="p-3"> AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem AbsumLorem Absum</p>







                <div className="container-fluid row p-5">
                    <div className="col-6 p-2">
                        <h3 className="border-bottom ">My Focus</h3>
                        <p>UI/UX Design</p>
                        <p>UI/UX Design</p>
                        <p>UI/UX Design</p>
                        <p>UI/UX Design</p>
                        <p>UI/UX Design</p>
                    </div>
                    <div className="col-6 ">

                        <Prog title="HTML" />
                        <Prog title="CSS" />
                        <Prog title="JAVASCRIPT" />
                        <Prog title="REACT" />
                        <Prog title="PHOTOSHOP" />
                        <Prog title="ADOBE XD" />
                        <Prog title="NODE.JS" />
                        <Prog title="WORDPRESS" />

                    </div>
                    

                </div>






            </div>
        )
    }
}