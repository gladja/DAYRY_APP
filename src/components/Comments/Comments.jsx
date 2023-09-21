import { AddComment } from '../AddComment/AddComment';

export const Comments = ({ items, setItems, selectItem }) => {
  return (
    <>
      <div>
        <div>
          <h1>Comments</h1>
        </div>
        <div></div>
        <div>
          <AddComment
            items={items}
            setItems={setItems}
            selectItem={selectItem}
          />
        </div>
      </div>
    </>
  );
};
