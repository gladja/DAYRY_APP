export const Comments = ({ items }) => {
  return (
    <>
      <div>
        <div>
          <h1>Comments</h1>
        </div>
        <div>

        </div>
        <div>
          <form>
            <input type='color'/>
            <textarea
              placeholder="Type comment here ..."
              required
            >
            </textarea>
            <button className="btn">Add New</button>
          </form>
        </div>
      </div>
    </>
  );
};
