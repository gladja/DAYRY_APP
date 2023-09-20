import { AddItem } from '../AddItem/AddItem';
import { ListItems } from '../ListItems/ListItems';

export const Items = ({ items, setItems, getItemsLocalStorage, handleDelete, handleItem }) => {
  return (
    <>
      <div>
        <div>
          <h1>Items</h1>
        </div>
        <div>
          <AddItem
            items={items}
            setItems={setItems}
            getItemsLocalStorage={getItemsLocalStorage}
          />
          <ListItems
            items={items}
            handleDelete={handleDelete}
            handleItem={handleItem}
          />
        </div>
      </div>
    </>
  );
};
