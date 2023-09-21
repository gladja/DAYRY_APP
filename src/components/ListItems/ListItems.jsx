import { useEffect } from 'react';
import './ListItems.scss';

export const ListItems = ({
  items,
  id,
  name,
  handleDelete,
  setSelectedItem,
  selectedItem,
}) => {
  const classNames = selectedItem?.id === id ? 'active-item' : '';

  useEffect(() => {
  }, []);

  const handleItem = id => {
    const selected = items.find(el => el.id === id);
    setSelectedItem(selected);

  };

  return (
    <>
      <li className={`list-item ${classNames}`} onClick={() => handleItem(id)}>
        {name}
        <button type="button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </li>
    </>
  );
};
