import { useEffect, useState } from 'react';
import './ListItems.scss';

export const ListItems = ({
  items,
  id,
  name,
  handleDelete,
  setSelectItem,
  getItemsLocalStorage,
  selectItem,
}) => {
  const [idAc, setIdAc] = useState();

  const activeItem = idAc === selectItem.id ? 'active-item' : '';

  useEffect(() => {
    // console.log('yes');
    // console.log(selectItem.id);
  }, []);

  useEffect(() => {
    if (idAc) {
      getItemsLocalStorage('selectItem');
    }
  });

  const handleItem = id => {
    const select = items.find(el => el.id === id);
    setSelectItem(select);
    setIdAc(id);
  };

  return (
    <>
      <li className={`list-item ${activeItem}`} onClick={() => handleItem(id)}>
        {name}
        <button type="button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </li>
    </>
  );
};
