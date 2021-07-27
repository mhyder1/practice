import { useEffect, useState, Fragment } from 'react'
import Comments from './Comments'
function App() {
  const [posts, setPosts] = useState([])
  const [postIndex, setPostIndex] = useState(0)
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(e => console.log(e))
  },[])

  const handleClick = (index) => {
    setPostIndex(index)
  }
  return (
    <main>
      {
        posts.map((post, index) => (
          <Fragment key={post.id}>
            <h1 onClick={() => handleClick(index)} style={{cursor: 'pointer'}}>{post.id} {post.title}</h1>
            <p>{post.body}</p>
            {index === postIndex && <Comments postIndex={postIndex} />}
            <hr />
          </Fragment>
        ))
      }
    </main>
  );
}

export default App;

/**
 * Get posts from api
 * diplay posts on screen
 * when user clicks on post title, comments are displayed
 */