import { AddItem } from '../AddItem/AddItem';
import { ListItems } from '../ListItems/ListItems';

export const Items = ({ items, setItems, getItemsLocalStorage }) => {
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
          />
        </div>
      </div>
    </>
  );
};
