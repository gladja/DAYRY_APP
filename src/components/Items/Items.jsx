import { AddItem } from '../AddItem/AddItem';
import { ListItems } from '../ListItems/ListItems';

export const Items = ({
  items,
  setItems,
  getItemsLocalStorage,
  handleDelete,
  setSelectItem,
  selectItem,
  handleItem,
}) => {
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
          <ul>
            {items &&
              items.map(({ id, name }) => (
                <div key={id}>
                  <ListItems
                    items={items}
                    handleDelete={handleDelete}
                    setSelectItem={setSelectItem}
                    selectItem={selectItem}
                    getItemsLocalStorage={getItemsLocalStorage}
                    id={id}
                    name={name}
                    handleItem={handleItem}
                  />
                </div>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
