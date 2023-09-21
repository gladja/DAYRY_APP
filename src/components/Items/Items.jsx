import { AddItem } from '../AddItem/AddItem';
import { ListItems } from '../ListItems/ListItems';
import './items.scss'

export const Items = ({
  items,
  setItems,
  handleDelete,
  setSelectedItem,
  selectedItem,
}) => {
  return (
    <>
      <div className='items'>
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
              items.map(({ id, name, comments}) => (
                <div key={id}>
                  <ListItems
                    items={items}
                    handleDelete={handleDelete}
                    setSelectedItem={setSelectedItem}
                    selectedItem={selectedItem}
                    id={id}
                    name={name}
                    comments={comments}
                  />
                </div>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
