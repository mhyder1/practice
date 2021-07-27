import { useEffect, useState } from "react";

const Comments = ({postIndex}) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postIndex + 1}/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((e) => console.log(e));
  },[postIndex]);
  return (
    <section>
        <h3>{postIndex + 1}</h3>
      <ol>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ol>
    </section>
  );
};

export default Comments;
