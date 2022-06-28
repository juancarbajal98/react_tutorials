import React, { useEffect, useState } from 'react'

const App = () => {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([]) // initialize as empty array to avoid undefined access in JSX

  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  console.log(items)
  return (
    <>
      <div>
        <button onClick ={() => setResourceType('posts')}>Posts</button>
        <button onClick ={() => setResourceType('users')}>Users</button>
        <button onClick ={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}
export default App;