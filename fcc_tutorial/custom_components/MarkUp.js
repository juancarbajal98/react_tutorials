const MarkUp = () => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <img src="react-logo.png" width="40px"/>
        </nav>
      </header>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by FB</li>
        <li>Powers thousands of enterprise apps, including modbile apps</li>
      </ul>
      <footer>
      <small>© 2022 Juan Carbajal development. All rights reserved.</small>
      </footer>
    </React.Fragment>
  )
}

const container = document.getElementById('root')

// ReactDOM.render(<MarkUp/>, container)