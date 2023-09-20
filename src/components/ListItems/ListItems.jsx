export const ListItems = ({ items, handleDelete, handleItem }) => {

  return (
    <>
      <ul>
        {items && items.map(({ id, name }) => (
          <div key={id}>
            <li onClick={() => handleItem(id)}>
              {name}
              <button type='button' onClick={() => handleDelete(id)}>Delete</button>
            </li>
          </div>
        ))
        }
      </ul>
    </>
  );
};
