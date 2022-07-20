export const Included = ({ list_head, included_list }) => {
  // const [currentExperience, setModalOpen] = useState(false);
  return (
    <div className="included">
      <span className="head">
        <strong className="included-head"> {list_head} </strong>
      </span>
      <ul>
        {included_list.map((listitem, i) => {
          return (
            <li className="included-text" key={i}>
              {listitem.list_item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
