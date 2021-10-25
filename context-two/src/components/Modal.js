import React from 'react'
import Modal from "react-modal"
import {useNavModalContext} from "./context"
Modal.setAppElement('#root')


const Modalx = () => {

    const data = useNavModalContext();
    const {isModalOpen, modalToggler} = data;
    return (
        <div>
            <button className='Modal-toggler' onClick={()=>modalToggler()}> Click me</button>
            <Modal isOpen={isModalOpen}>
                <div>
                    <h1> Hello</h1>
                    <button onClick={()=>modalToggler()}>Close me</button>
                </div>
            </Modal>
        </div>
    )
}

export default Modalx
