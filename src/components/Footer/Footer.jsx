import './Footer.css'
import FooterMenu from './FooterMenu'
import FooterBottomItems from './FooterBottomItems'

const Footer = () => {
    return (
        <div className='FooterSection'>
            <FooterMenu />
            <FooterBottomItems />
        </div>
    )
}

export default Footer