import { useEffect, useState } from 'react';
import { Items } from './Items/Items';
import data from '../data/data.json';
import { Comments } from './Comments/Comments';

export const App = () => {
  const [items, setItems] = useState(data);
  const [selectItem, setSelectItem] = useState({});

  // console.log(JSON.parse(localStorage.getItem('items')));

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('items'));
    setSelectItem(JSON.parse(localStorage.getItem('selectItem')));
    if (storage === null || storage.length === 0) {
      return setItems(data);
    }
    setItems(storage);
  }, []);

  const getItemsLocalStorage = (key, newItems = selectItem) => {
    localStorage.setItem(key, JSON.stringify(newItems));
  };

  const handleDelete = id => {
    const delItem = items.filter(el => el.id !== id);
    setItems(delItem);
    getItemsLocalStorage('items', delItem);
  };

  // let activeItem = '';
  // const handleItem = (id) => {
  //   console.log(id);
  //   setSelectItem(items.find(el => el.id === id))
  //   localStorage.setItem('selectItem', JSON.stringify(selectItem))
  //     activeItem = id === selectItem.id ? 'active-item' : '';
  //     console.log(id);
  //     console.log(selectItem);
  //     return activeItem;
  //   }

  // console.log(selectItem.id);

  return (
    <>
      <div>
        <Items
          items={items}
          setItems={setItems}
          getItemsLocalStorage={getItemsLocalStorage}
          handleDelete={handleDelete}
          selectItem={selectItem}
          setSelectItem={setSelectItem}
        />
        <Comments items={items} setItems={setItems} selectItem={selectItem} />
      </div>
    </>
  );
};
