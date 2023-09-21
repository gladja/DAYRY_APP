import { nanoid } from 'nanoid';
import { useState } from 'react';

export const AddComment = ({ items, setItems, selectItem }) => {
  const [body, setBody] = useState('');
  const [color, setColor] = useState('#000000');

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(items[0].comments);
    if (body.trim() === '') return;
    const newComment = {
      id: nanoid(8),
      color,
      body,
    };
    const selected = { ...selectItem };
    selected.comments.push(newComment);
    console.log(selected);
  };

  const colorSet = e => {
    setColor(e.currentTarget.value);
    console.log(color);
  };

  const commentItem = e => {
    setBody(e.currentTarget.value);
    console.log(body);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={colorSet} />
        <textarea
          placeholder="Type comment here ..."
          required
          value={body}
          onChange={commentItem}
        ></textarea>
        <button type="submit">Add New</button>
      </form>
    </>
  );
};
