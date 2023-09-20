import { useEffect, useState } from 'react';
import { Items } from './Items/Items';
import data from '../data/data.json';
import { Comments } from './Comments/Comments';


export const App = () => {
  const [items, setItems] = useState(data);
  const [selectItem, setSelectItem] = useState({});

  // console.log(JSON.parse(localStorage.getItem('items')));

  useEffect(() => {
    const storage =  JSON.parse(localStorage.getItem('items'));

    if (storage === null || storage.length === 0) {
      return setItems(data);
    }
    setItems(storage)
  }, [])

  const getItemsLocalStorage = (newItems) => {
    localStorage.setItem('items', JSON.stringify(newItems))
  }

  const handleDelete = (id) => {
    const delItem = items.filter(el => el.id !== id);
    setItems(delItem);
    getItemsLocalStorage(delItem);
  }

  const handleItem = (id) => {
    console.log(id);
    setSelectItem(items.find(el => el.id === id))
    // setSelectItem(items.id)
    console.log(selectItem);
  }

  return (
    <>
    <div>
      <Items
        items={items}
        setItems={setItems}
        getItemsLocalStorage={getItemsLocalStorage}
        handleDelete={handleDelete}
        handleItem={handleItem}
      />
      <Comments
        items={items}
        setItems={setItems}
      />
    </div>
    </>
  );
};
