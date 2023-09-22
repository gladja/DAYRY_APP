import { useEffect } from 'react';
import './listItems.scss';

export const ListItems = ({
                            items,
                            id,
                            name,
                            handleDelete,
                            setSelectedItem,
                            selectedItem,
                            comments,
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
        <div className={'item'}>{name}</div>
        <div className={'count'}>{comments.length}</div>
        <button className={'btn-del'} type='button' onClick={() => handleDelete(id)}>
          Delete
        </button>
      </li>
    </>
  );
};
