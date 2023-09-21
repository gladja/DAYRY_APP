import { AddItem } from '../AddItem/AddItem';
import { ListItems } from '../ListItems/ListItems';

export const Items = ({
  items,
  setItems,
  handleDelete,
  setSelectedItem,
  selectedItem,
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
          />
          <ul>
            {items &&
              items.map(({ id, name }) => (
                <div key={id}>
                  <ListItems
                    items={items}
                    handleDelete={handleDelete}
                    setSelectedItem={setSelectedItem}
                    selectedItem={selectedItem}
                    id={id}
                    name={name}
                  />
                </div>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
