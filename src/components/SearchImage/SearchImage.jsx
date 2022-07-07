import Button from "components/Button";
import ImageGallery from "components/ImageGallery";
import Modal from "components/Modal";
import Searchbar from "components/Searchbar";

const { Component } = require("react");


export default class SearchImage extends Component  {
    state = {
    modal: false
    }

    render() {
        return (
            <>
            <Searchbar />
            <ImageGallery />
            <Button />
                {this.state.modal && <Modal />}
        </>
        )
    }
}
