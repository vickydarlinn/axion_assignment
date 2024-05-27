import { Link } from "react-router-dom";
import style from "./comingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={style.wrapper}>
      <p>Coming Soon....</p>
      <Link to="/">GO Home</Link>
    </div>
  );
};

export default ComingSoon;
