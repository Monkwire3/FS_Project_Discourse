import { Modal } from '../../context/Modal';
import React, { useState } from 'react';
import CreateChannelForm from '../CreateChannelForm';

function CreateChannelFormModal({server, menuItem=false}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(true)}>
                {!menuItem ? <svg>
                    <polygon fill='#96989d' points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon>
                </svg> : <div className='dropDownItem'>Add Channel</div>}
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateChannelForm onClose={() => setShowModal(false)} server={server} />
                </Modal>
            )}
        </>
    )

}

export default CreateChannelFormModal;