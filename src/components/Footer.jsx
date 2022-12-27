import { Component } from "react";

export class Footer extends Component {
    render(){
        return(
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="container text-center">
                    <span className="text-muted">
                        Página para tener en el portafolio. 
                        <b> No es una página oficial de la Scaloneta.</b>
                    </span>
                </div>
            </footer>
        );
    }
}