import React, {Component} from 'react'
import Modal from "./Modal";
import {createPortal} from "react-dom";

export default class Portal extends Component {
    state = {modal: false};

    toggle = (e) => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    render() {
        return (
            <>
                <button type="button" className="modal-open-button btn btn-danger" onClick={() => this.toggle()}>Open
                </button>
                {this.state.modal && createPortal(
                    <Modal onClose={() => this.toggle()}/>,
                    document.body
                )}
            </>
        );
    }
}