import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const AddComment = ({ items, setItems, selectItem, setSelectItem }) => {
  const [body, setBody] = useState('');
  const [color, setColor] = useState('#000000');


  const handleSubmit = e => {
    e.preventDefault();
    if (body.trim() === '') return;
    const newComment = {
      id: nanoid(8),
      color,
      body,
    };
    const selected = { ...selectItem };
    selected.comments.push(newComment);
    setSelectItem(selected);
    const newItems = [...items]
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
    setBody('');
  };
  useEffect(() => {
  }, []);

  const colorSet = e => {
    setColor(e.currentTarget.value);
    console.log(color);
  };

  const colorAdd = e => {
    setBody(e.currentTarget.value);
    console.log(body);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='color' value={color} onChange={colorSet} />
        <textarea
          placeholder='Type comment here ...'
          required
          value={body}
          onChange={colorAdd}
        ></textarea>
        <button type='submit'>Add New</button>
      </form>
    </>
  );
};
