import { useEffect, useState } from 'react';
import { Items } from './Items/Items';
import data from '../data/data.json';
import { Comments } from './Comments/Comments';
import './app.scss'

export const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || data); //data
  const [selectedItem, setSelectedItem] = useState(JSON.parse(localStorage.getItem('selectItem')) || {});

  useEffect(() => {
    if (selectedItem) {
      setToLocalStorage('selectItem', selectedItem);
    }
  }, [selectedItem])

  useEffect(() => {
    if (items) {
      setToLocalStorage('items', items);
    }

    if (items.length === 0) {
    setSelectedItem({});
    }
  }, [items])

  const setToLocalStorage = (key, data) => {
    if (data) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  };

  const handleDelete = id => {
    const filteredItems = items.filter(el => el.id !== id);
    setItems(filteredItems);
    setToLocalStorage('items', filteredItems);
  };

  // console.log(items);
  return (
    <>
      <div className='container'>
        <Items
          items={items}
          setItems={setItems}
          handleDelete={handleDelete}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <Comments
          items={items}
          setItems={setItems}
          selectItem={selectedItem}
          setSelectItem={setSelectedItem}
        />
      </div>
    </>
  );
};
