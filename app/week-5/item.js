const LIST_STYLES =
  "capitalize m-4 bg-[#EE6C4D] rounded-lg p-4 text-white max-w-[300px]";

const Item = ({ name, quantity, category }) => {
  return (
    <div>
      <ul className={LIST_STYLES}>
        <li className="text-lg">{name}</li>
        <li>
          Buy {quantity} in {category}
        </li>
      </ul>
      <Item name={name} quantity={quantity} category={category} />
    </div>
  );
};

export default Item;
