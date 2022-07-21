const MarkUp = (
  <div>
    {/* <img src="react-logo.png" style={{"width":"40px"}}></img> */}
    <img src="react-logo.png" width="40px"/>
    <h1>Fun facts about React</h1>
   <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by FB</li>
      <li>Powers thousands of enterprise apps, including modbile apps</li>
    </ul>
  </div>
)
const container = document.getElementById('root')
ReactDOM.render(MarkUp, container)