import React from 'react';
import styled from '@emotion/styled';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Container = styled.div<{
  width: string;
  height: string;
}>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #bcbcbc;
  border-radius: 8px;
  overflow: hidden;
`;

const MovingContainer = styled.div<{ current: number }>`
  display: flex;
  height: 100%;
  transform: ${({ current }) => `translateX(calc(-${current} * 100%))`};
`;

const Item = styled.div<{ color: string }>`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
`;

const Indicator = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1em;
  color: #fefefe;
  user-select: none;
`;

const PrevButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface CarouselProps {
  width: string | number;
  height: string | number;
  children?: React.ReactNode | null | undefined;
}

const Carousel = ({ width, height, children }: CarouselProps) => {
  const [current, setCurrent] = React.useState<number>(1);
  const [transition, setTransition] = React.useState<string>(
    'transform 0.3s ease',
  );

  const movingRef = React.useRef<HTMLDivElement>(null);
  const isMoving = React.useRef<boolean>(false);

  const childrenArray = React.Children.toArray(children);
  const clonedSlide = [
    childrenArray[childrenArray.length - 1],
    ...childrenArray,
    childrenArray[0],
  ];
  const TOTAL_LENGTH = clonedSlide.length - 1;

  if (typeof width === 'number') {
    width = width + 'px';
  }
  if (typeof height === 'number') {
    height = height + 'px';
  }

  const moveToNthSlide = (number: number) => {
    setTimeout(() => {
      setTransition('');
      setCurrent(number);
    }, 300);
  };

  const handlePrevClick = () => {
    if (isMoving.current) return;

    const next = current - 1;
    setCurrent(next);

    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 300);

    if (next === 0) {
      moveToNthSlide(TOTAL_LENGTH - 1);
    }

    setTransition('transform 0.3s ease');
  };

  const handleNextClick = () => {
    if (isMoving.current) return;

    const next = current + 1;
    setCurrent(next);

    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 300);

    if (next === TOTAL_LENGTH) {
      moveToNthSlide(1);
    }

    setTransition('transform 0.3s ease');
  };

  const displayCurrent =
    current === TOTAL_LENGTH ? 1 : current === 0 ? TOTAL_LENGTH - 1 : current;

  return (
    <Container width={width} height={height}>
      <MovingContainer ref={movingRef} current={current} style={{ transition }}>
        {clonedSlide.map((item, index) => {
          if (React.isValidElement(item)) {
            return React.cloneElement(item, { key: index });
          }
        })}
      </MovingContainer>
      <Indicator>
        <PrevButton onClick={handlePrevClick}>
          <MdKeyboardArrowLeft size={24} />
        </PrevButton>
        {displayCurrent} / {TOTAL_LENGTH - 1}
        <NextButton onClick={handleNextClick}>
          <MdKeyboardArrowRight size={24} />
        </NextButton>
      </Indicator>
    </Container>
  );
};

export { Carousel, Item };
