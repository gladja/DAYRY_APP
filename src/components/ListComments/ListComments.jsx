export const ListComments = ({ selectItem }) => {
  return (
    <>
      {selectItem && selectItem.comments?.map(({ body, color }, idx) => (
        <div key={idx}>
          <li style={{ color: color }}>
            {body}
          </li>
        </div>
      ))}
    </>
  )
}
