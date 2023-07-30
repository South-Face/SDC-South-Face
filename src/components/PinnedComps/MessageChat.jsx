import { useState } from 'react';

import './Message.css'
import reverselogo from "./img/white-south-face-logo.png";
import letterIcon from "./img/letter-case.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPrint, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

const MessageChat = ({closeChatbox}) => {
    const [isVolumeOn, setIsVolumeOn] = useState(true);

    const handleVolumeToggle = () => {
        setIsVolumeOn((prevVolume) => !prevVolume);
    }
    
    return (
       <>
        <div className='message-chat-overlay'>
            <div className='chatbox-container'>
                <div className='message-chat-topbar'>
                    <div className='message-chat-logo'>
                        <img className="message-chat-south-face-logo" src={reverselogo} loading='lazy' alt='scroll to top'></img>
                    </div>
                    <div className='message-chat-btnminimize'>
                        <img onClick={closeChatbox} src="https://media-us1.digital.nuance.com/media/sites/10007246/flash//TNF-Standard_Window_Th-DT-EN/TNF-Minimize.png"></img>
                    </div>
                    <div className='message-chat-btnclose'>
                        <img onClick={closeChatbox} src="https://media-us1.digital.nuance.com/media/sites/10007246/flash//TNF-Standard_Window_Th-DT-EN/TNF-Close.png"></img>
                    </div>
                </div>

                <div className='message-chatbox-window'></div>

                <div className='message-chatbox-txtinput-bg'>
                    <div className='chatbox-txtinput-area'>
                        <textarea className='chatbox-txtinput-input' placeholder="Type your message here..."></textarea>
                    </div>
                    <div className='chatbox-txtinput-btnsend'>
                        <img src='https://media-us1.digital.nuance.com/media/sites/10007246/flash//TNF-Standard_Window_Th-DT-EN/TNF-Send.png'></img>
                    </div>
                </div>

                <div className='message-chatbox-navbar'>
                    <div className='chatbox-navbar-email'><FontAwesomeIcon icon={faEnvelope} size="2xs" className='chatbox-emailicon'/></div>
                    <div className='chatbox-navbar-print'><FontAwesomeIcon icon={faPrint} size="2xs" className='chatbox-printicon'/></div>
                    <div className='chatbox-navbar-fontsize'><img src={letterIcon} className='chatbox-lettericon'></img></div>
                    <div className='chatbox-navbar-sound' onClick={handleVolumeToggle}>
                    {isVolumeOn ? (
                        <FontAwesomeIcon icon={faVolumeHigh} size="2xs" className='chatbox-volhighicon'/>
                        ) : (
                        <FontAwesomeIcon icon={faVolumeXmark} size="2xs" className='chatbox-novolicon' />
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MessageChat