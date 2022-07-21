import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
/* ABOVE IMPORTS WILL NOT WORK CLIENTSIDE */

const MarkUp = () => {
  return (
    <React.Fragment>
      <Header/>
      <Content/>
      <Footer/>
    </React.Fragment>
  )
}

const container = document.getElementById('root')

ReactDOM.render(<MarkUp/>, container)