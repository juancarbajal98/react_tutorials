import tw from './images/twitter-icon.png'
import fb from './images/fb-icon.png'
import ig from './images/ig-icon.png'
import gh from './images/github-icon.png'

const Footer = () => {
  return (
  <div className="footer--container">
    <div className="footer--icon-container">
      <img src={tw}></img>
      <img src={fb}></img>
      <img src={ig}></img>
      <img src={gh}></img>
    </div>
  </div>
  )
};

export default Footer;