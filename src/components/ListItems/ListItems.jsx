export const ListItems = ({ items }) => {
  return (
    <>
      <ul>
        {items && items.map(({ id, name }) => (
          <div key={id}>
            <li >
              {name}
              <button type='button'>Delete</button>
            </li>
          </div>
        ))
        }
      </ul>
    </>
  );
};
