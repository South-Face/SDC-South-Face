import './Message.css'
import { useState } from 'react'
import bubble from "./img/Subject.png";
import MessageChat from './MessageChat';

const Message = () => {
    
    const [chatOpen, setChatOpen] = useState(false);

    const handleChatboxOpen = () => setChatOpen(true);
    const closeChatbox = () => setChatOpen(false);
    
    return (
        <>
            <div>
                <img onClick={handleChatboxOpen} className="chatbubble" src={bubble} style={{width:'60px', height:'60px'}}></img>
            </div>

            {chatOpen && (
            <MessageChat 
            closeChatbox={closeChatbox}
            />
            )}

        </>
    )
}

export default Message
