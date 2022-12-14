import { Modal } from '../../context/Modal'
import React, { useState } from 'react';
import EditServerForm from '../EditServerForm';

function EditServerFormModal({server}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <div className="" onClick={() => setShowModal(true)}>Edit Server</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <EditServerForm  onClose={() => setShowModal(false)} server={server} />
            </Modal>
        )}
        </>
    )
}

export default EditServerFormModal;