export const ListItems = ({ items, handleDelete }) => {

  return (
    <>
      <ul>
        {items && items.map(({ id, name }) => (
          <div key={id}>
            <li >
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
