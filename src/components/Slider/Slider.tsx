import React, { FC, useState } from 'react';
import Switch from 'ui/Switch/Switch';
import styles from './Slider.module.scss';
import Image from 'ui/Image/Image';

type SliderProps = {
  slides: Slide[];
  width?: string;
  height?: string;
};

const Slider: FC<SliderProps> = ({
  slides = [],
  width = '100%',
  height,
}): JSX.Element => {
  const [slide, setSlide] = useState<number>(1);

  const nextSlide = () => {
    if (slide === slides[slides.length - 1].id) {
      return setSlide(1);
    }
    setSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (slide === slides[0].id) {
      return setSlide(slides[slides.length - 1].id);
    }
    setSlide((prev) => prev - 1);
  };

  return (
    <div
      style={{ width: width, height: height }}
      className={`${styles.slider}`}
    >
      {slides.map(
        ({ alt, id, src }) =>
          slide === id && (
            <Image key={id} height="524px" title={alt} children={src} />
          ),
      )}
      <Switch onNext={nextSlide} onPrev={prevSlide} />
      <div className={styles.indicators}>
        {slides.map(({ id }) => (
          <span
            onClick={() => setSlide(id)}
            key={id}
            className={`${styles.indicator} ${
              slide === id && styles.active_indicators
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
