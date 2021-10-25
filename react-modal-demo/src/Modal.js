import React from 'react'
import ReactModal from 'react-modal'
import { useModalHook } from './Context'

ReactModal.setAppElement("#root")
const Modal = () => {
    const data = useModalHook();
    const{isModalOpen, modalToggler} = data;
 
    return (
        <div>
            <button onClick={()=>modalToggler()}>Open Modal</button>
            <ReactModal isOpen={isModalOpen} onRequestClose={false} style={{
               overlay:{
                    backgroundColor:"black"
                }, content:{
                    backgroundColor:"Purple"
                }
            }}>
<button onClick={()=>modalToggler()}> Close me</button>
            </ReactModal>
        </div>
    )
}

export default Modal
