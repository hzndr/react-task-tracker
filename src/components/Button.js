// import PropTypes from "propTypes";

const Button = ({ text, color, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ borderColor: color, color }}
        className="header__btn"
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
// };

export default Button;
