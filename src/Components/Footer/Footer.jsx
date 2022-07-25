import React, { Component } from "react";
import './Footer.css';

export class Footer extends Component {

    render() {
        return (
            <footer class="bg-dark text-light text-center">

                <div class="text-center p-3">
                    © 2020 Copyright:
                    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        )
    }
}