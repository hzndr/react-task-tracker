import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      <p>Copyright &copy; 2021 </p>
      {location.pathname === "/" ? (
        <Link to="/about" className="footer__link link">
          About
        </Link>
      ) : (
        <Link to="/" className="footer__link link">
          Home
        </Link>
      )}
    </footer>
  );
};

export default Footer;
