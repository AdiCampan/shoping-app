import ReactDom from 'react-dom';
import './Modal.css';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onClose}></div>
}
const ModalOverlays = (props) => {
 return <div className='modal'>
    <div className='content'>{props.children}</div>
 </div>
}

const portalElement = document.getElementById("overlays")

const Modal = (props) => {
  return (
    <div>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDom.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
    </div>
  )
}

export default Modal