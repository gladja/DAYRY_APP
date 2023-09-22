import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import './addComment.scss'

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
    setColor('#000000')
  };


  const colorSet = e => {
    setColor(e.currentTarget.value);
  };

  const colorAdd = e => {
    setBody(e.currentTarget.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={'addComment'}>
        <input type='color' value={color} onChange={colorSet} className={'input-color'}/>
        <textarea
          className={'form'}
          placeholder='Type comment here ...'
          required
          value={body}
          onChange={colorAdd}
        ></textarea>
        <button type='submit' className={'btn-add-com'}>Add New</button>
      </form>
    </>
  );
};
