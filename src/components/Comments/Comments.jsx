import { AddComment } from '../AddComment/AddComment';
import { ListComments } from '../ListComments/ListComments';
import './comments.scss'

export const Comments = ({ items, setItems, selectItem, setSelectItem }) => {
  return (
    <>
      <div className='comments'>
        <div>
          <h1>Comments {selectItem.id}</h1>
        </div>
        <div></div>
        <div>
          <ul>
            <ListComments
              selectItem={selectItem}
            />
          </ul>
        </div>
        <div>
          <AddComment
            items={items}
            setItems={setItems}
            selectItem={selectItem}
            setSelectItem={setSelectItem}
          />
        </div>
      </div>
    </>
  );
};
