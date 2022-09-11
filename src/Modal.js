import ReactDom from 'react-dom';
import './Modal.css';

const Backdrop = () => {
  return <div className='backdrop'></div>
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
        {ReactDom.createPortal(<Backdrop/>, portalElement)}
        {ReactDom.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
    </div>
  )
}

export default Modal