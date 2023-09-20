import { useEffect, useState } from 'react';
import { Items } from './Items/Items';
import data from '../data/data.json';


export const App = () => {
  const [items, setItems] = useState(data);
  const [selectItem, setSelectItem] = useState({});

  console.log(items);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('items')))
  }, [])

  const getItemsLocalStorage = (newItems) => {
    localStorage.setItem('items', JSON.stringify(newItems))
  }

  return (
    <>
    <div>
      <Items
        items={items}
        setItems={setItems}
        getItemsLocalStorage={getItemsLocalStorage}
      />

    </div>
    </>
  );
};
