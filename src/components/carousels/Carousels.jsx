import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import style from "./carousels.module.css";

const Carousels = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className={style.image_card}>
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className={`${style.arrow} ${style.arrow_left}`}
      />
      <img src={data[slide]} />
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className={`${style.arrow} ${style.arrow_right}`}
      />
    </div>
  );
};
export default Carousels;
