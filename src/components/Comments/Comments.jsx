import { AddComment } from '../AddComment/AddComment';
import { ListCommit } from '../ListCommit/ListCommit';
import './Comments.scss'

export const Comments = ({ items, setItems, selectItem, setSelectItem }) => {
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
            setSelectItem={setSelectItem}
          />
        </div>
        <div>
          <ul>
            <ListCommit
              selectItem={selectItem}
            />
          </ul>
        </div>
      </div>
    </>
  );
};
