import reactLogo from "./images/logo192.png"
const Header = () => {
  return (
    <header>
      <nav>
        <img src={reactLogo} className="nav--icon"/>
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
    </header>
  )
};

export default Header;