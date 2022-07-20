import { Component } from 'react'
import s from './modal.module.css'
import PropTypes from 'prop-types';
class Modal extends Component  {
    componentDidMount() {
        document.addEventListener('keydown', e => {
            if (e.code === "Escape") {
            this.props.closeModal()
        }
    })
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.props.closeModal);
    }
    onClick = (e) => {
         const {closeModal} = this.props
        if (e.target === e.currentTarget) {
            closeModal()
        }
    } 
    render() {
        const { children } = this.props;
        return (
            <div onClick={this.onClick} className={s.overlay}>
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