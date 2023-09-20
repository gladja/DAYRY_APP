import { useState } from 'react';
import { nanoid } from 'nanoid';

export const AddItem = ({ items, setItems, getItemsLocalStorage}) => {

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    const newItems = [...items, { id:  nanoid(8), name, comments: []}];
    setItems(newItems)
    setName('');
    getItemsLocalStorage(newItems);
  };

  const nameItem = (e) => {
    setName(e.currentTarget.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name='inpet'
          onChange={nameItem}
          value={name}
          type='text'
          placeholder='Type name here...'
          required
          autoCapitalize='off'
        />
        <button type='submit'>Add New</button>
      </form>
    </>
  );
};
