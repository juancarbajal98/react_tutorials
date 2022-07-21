/* IMPERATIVE */
let h1 = document.createElement('h1')
h1.textContent = 'Vanilla JS'
h1.classList.add("header")
document.getElementById('vanillaDOMAppend').appendChild(h1)
console.log(h1) // STRING

/* DECLARATIVE */
let h1_react = <h1 className="header">Vanilla JS</h1>
console.log(h1_react) // JS OBJECT
// ReactDOM.render(h1_react, document.getElementById("vanillaDOMAppend"))
