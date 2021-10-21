import React,{useState} from 'react'
//use modal npm module
//create gray overlay 
import Modal from "react-modal"
Modal.setAppElement('#root')
const ModalX = () => {


    const [modalOpen, setIsModalOpen] = useState(false)
    return (
        <div className='modal-container'>
            <button onClick={()=>setIsModalOpen(true)}> Click Me!!!</button>
      <Modal isOpen={modalOpen} onRequestClose={()=>setIsModalOpen(false)} style={
          {
            //   overlay:{
            //       backgroundColor:"gray"
            //   },
              content:{
                  backgroundColor: "lightGreen",
                  width:"30vw",
                  height:"20vh",
                  overflow:  "hidden",
                  margin: "30vh auto"
              }
          }
      }>
          <div>
              <h1> I am a modal container</h1>
              <button onClick={()=>{setIsModalOpen(false)}}> X</button>
          </div>
      </Modal>
        </div>
    )
}

export default ModalX
