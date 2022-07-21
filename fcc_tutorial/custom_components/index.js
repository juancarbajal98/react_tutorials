const CustomComponent = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

const container = document.getElementById('root')

ReactDOM.render(<CustomComponent/>, container)