import '../styles/common/button.scss'

const Button = ({ text, link, newClass = '' }) => {
  return (
    <a href={link} className={`button ${newClass}`}>
      {text}
    </a>
  );
};

export default Button;