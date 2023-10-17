import { useState } from "react";
import "../css/ItemCard.css";

const ItemCard = ({
  item,
  additionFn,
  validationFn,
  hoverProps,
  clicked = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { img_url: itemImg } = item;
  const baseBg = `url('${itemImg}') center/ cover no-repeat`;
  const hoveredBg = `${baseBg}`;
  const border = clicked ? `3px solid green` : "none";

  const handleClick = () => {
    if (!validationFn(item)) {
      console.log("Show not valid modal");
    } else {
      additionFn(item);
    }
  };

  return (
    <div
      className="item-card"
      style={{ background: isHovered ? hoveredBg : baseBg, border }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {hoverProps &&
        hoverProps.map((prop, index) => (
          <p className="hover-text" key={index}>
            {prop}{" "}
          </p>
        ))}
    </div>
  );
};
export default ItemCard;
