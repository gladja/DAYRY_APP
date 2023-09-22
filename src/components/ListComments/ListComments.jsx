import './listComments.scss'

export const ListComments = ({ selectItem }) => {
  return (
    <>
      {selectItem && selectItem.comments?.map(({ body, color }, idx) => (
        <div key={idx}>
          <li style={{ color: color }} className={'comments-item'}>
            <div style={{ backgroundColor: color }} className={'comments-item-color'}></div>
            <div className={'comments-item-text'}>{body}</div>
          </li>
        </div>
      ))}
    </>
  )
}
