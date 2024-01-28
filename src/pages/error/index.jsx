import "./error.css";
import { Link } from "react-router-dom";
import ImgError from "../../error-404.png";

const Error = () => {
  return (
    <div className="container-error">
      <img src={ImgError} alt="" />
      <h1>pagina nao encontrada</h1>
      <Link to="/">voltar para pagina inicial</Link>
    </div>
  );
};

export default Error;
