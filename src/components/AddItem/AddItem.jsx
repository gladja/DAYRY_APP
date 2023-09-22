import { useState } from 'react';
import { nanoid } from 'nanoid';
import './addItem.scss'

export const AddItem = ({ items, setItems }) => {

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    const newItems = [...items, { id:  nanoid(8), name, comments: []}];
    setItems(newItems)
    setName('');
  };

  const setNameItem = (e) => {
    setName(e.currentTarget.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={'input'}>
        <input
          className={'input-add'}
          name='input'
          onChange={setNameItem}
          value={name}
          type='text'
          placeholder='Type name here...'
          required
          autoCapitalize='off'
        />
        <button type='submit' className={'btn-add'}>Add New</button>
      </form>
    </>
  );
};
