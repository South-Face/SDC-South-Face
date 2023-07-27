import './Message.css'
// import bubble from "./img/chat_bubble-removebg.png";
import bubble from "./img/subject.png";

const Message = () => {
    return (
        <div>
            <img className="chatbubble" src={bubble} style={{width:'60px', height:'60px'}}></img>
        </div>
    )
}

export default Message