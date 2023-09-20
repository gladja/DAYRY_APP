import { AddComment } from '../AddComment/AddComment';

export const Comments = ({ items, setItems }) => {

  return (
    <>
      <div>
        <div>
          <h1>Comments</h1>
        </div>
        <div>

        </div>
        <div>
          <AddComment
            items={items}
            setItems={setItems}
          />
        </div>
      </div>
    </>
  );
};
