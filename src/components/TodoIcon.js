import { ReactComponent as CheckSVG } from "../images/check.svg";
import { ReactComponent as DeleteSVG } from "../images/delete.svg";

const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span onClick={onClick}
      className={`Icon-container 
    Icon-container-${type}`}
    >
      {/* {type === "check" ? <CheckSVG /> : <DeleteSVG />} */}
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
