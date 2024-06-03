const LIST_STYLES = "capitalize m-4";

const Item = ({ name, quantity, category }) => {
  return (
    <div>
      <ul className={LIST_STYLES}>
        <li className="text-lg">{name}</li>
        <li>
          Buy {quantity} in {category}
        </li>
      </ul>
    </div>
  );
};

export default Item;
