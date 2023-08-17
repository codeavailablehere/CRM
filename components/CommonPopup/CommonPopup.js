import React, {useEffect} from 'react'
import {Modal} from 'reactstrap'

const CommonPopup = (props) => {
    useEffect(() => {
     if(props.isOpen){
        document.body.style.overflow = "hidden";
     }else{
        document.body.style.overflow = 'visible';
     }
    }, [])
    
  return (
    <Modal className='common-popup-wraper' centered={true} isOpen={props.isOpen} toggle={props.toggle} {...props}>
        {props.children}
    </Modal>
  )
}

export default CommonPopup