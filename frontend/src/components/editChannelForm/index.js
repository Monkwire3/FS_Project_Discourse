import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import * as channelActions from '../../store/channels'
import { useState } from 'react';
import './EditChannelForm.css';


function EditChannelForm({onClose, channel, server}) {
    const dispatch = useDispatch();
    const [channelName, setChannelName] = useState(channel.name);
    const history = useHistory();


    function handleSubmit(e) {
        dispatch(channelActions.editChannel({channel_name: channelName, id: channel.id}))
        onClose();
   
    } 

    function handleDeleteChannel(e) {
        onClose();
        dispatch(channelActions.deleteChannel(channel.id))
        .then(() => 
            history.push(`/channels/${server.channels.length > 1 ? server.channels[0].id === channel.id ? server.channels[1].id : server.channels[0].id : '@me'}`)
        )

    }

    return (
        <div id='editChannelFormContainer'>
     <div id='leftChannelForm'>
         <div id='leftChannelFormNav'>
            <button onClick={handleDeleteChannel}>DeleteChannel</button>
         </div>
        </div>
        <div id='rightChannelForm'>
        <div id='editChannelForm'>
            <div className='inputGroup'>
                <label htmlFor='channelName'>channel name</label>
                <input id="channelName" value={channelName} onChange={(e) => setChannelName(e.target.value)}></input>
            </div>
            <div className=' inputGroup inputGroupSubmit'>
                <button onClick={handleSubmit}>Save Changes</button>
            </div>
        </div>
        <div onClick={onClose} id="closeButton">
            <div id="closeButtonCircle">
            <svg id="closeButtonSvg">
                <path fill='#b9bbbe' d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">

                </path>

            </svg>
            </div>
            <div>
                ESC
            </div>

        </div>
        </div>
        </div>

    )


}


export default EditChannelForm;