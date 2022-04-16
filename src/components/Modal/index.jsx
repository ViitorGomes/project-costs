import React from 'react';
import { Modal } from './style';
import { SimpleButton } from '../SimpleButton/style'
import { MdClose } from "react-icons/md";

function index({children, closeCb}) {

    return (
        <Modal>
            <SimpleButton type="button" onClick={closeCb} title="close"><MdClose/></SimpleButton>
            {children}
        </Modal>
    )
}

export default index;
