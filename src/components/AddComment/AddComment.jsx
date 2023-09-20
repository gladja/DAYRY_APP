import { useState } from 'react';

export const AddComment = ({ items, setItems }) => {

  const [comment, setComment] = useState('');
  const [color, setColor] = useState('#000000');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(items[0].comments);
    if (comment.trim() === '') return;
    // const newComment =
  }

  const colorSet = (e) => {
    setColor(e.currentTarget.value);
    console.log(color);
  }

  const commentItem = (e) => {
    setComment(e.currentTarget.value);
    console.log(comment);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='color'
          value={color}
          onChange={colorSet}
        />
        <textarea
          placeholder="Type comment here ..."
          required
          value={comment}
          onChange={commentItem}
        >
        </textarea>
        <button type='submit'>Add New</button>
      </form>
    </>
  )
}
