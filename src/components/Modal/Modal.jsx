import { Component } from 'react'
import s from './modal.module.css'
import PropTypes from 'prop-types';
class Modal extends Component  {
    componentDidMount() {
        document.addEventListener('keydown', this.close)
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.close)
    }
    close = (e) => {
        const { closeModal } = this.props
        
        if (e.code === "Escape") {
            closeModal()
        }

        if (e.target === e.currentTarget) {
            closeModal()
        }
    } 
    render() {
        const { children } = this.props;
        return (
            <div onClick={this.close} className={s.overlay}>
                <div className={s.modal}>
                    { children }
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
}

export default Modal