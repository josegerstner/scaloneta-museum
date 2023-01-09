import { Component } from "react";

export class Footer extends Component {
    render(){
        return(
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="container text-center">
                    <a className="text-decoration-none" href="https://github.com/josegerstner/scaloneta-museum" target="_blank">
                        <span className="text-muted">
                                Página creada con Vite (React JS) para tener en el portafolio. 
                            <b> No es una página oficial de la Scaloneta.</b>
                        </span>
                    </a>
                </div>
            </footer>
        );
    }
}