const page = (
  <div>
    <h1>React</h1>
    <h3>JSX outputted with .append():</h3>
  </div>
)

document.getElementById('jsAppend').append(JSON.stringify(page))
// ReactDOM.render(page, document.getElementById('jsAppend'))