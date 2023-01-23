import React from 'react';
import styled from '@emotion/styled';

import { AiOutlineLink } from 'react-icons/ai';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  top: 50%;
  transform: translate(-100%, -60%);
`;

interface HeadingProps {
  children: React.ReactNode;
  id?: string;
  level: number;
  icon?: boolean;
  onClick?: () => void;
}

/**
 * 필요한 것
 * @params level
 * @params icon
 * @params children
 */
const Heading = ({
  children,
  id,
  level,
  icon = false,
  onClick,
}: HeadingProps) => {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const handleClick = () => {
    onClick?.();
  };

  return (
    <Wrapper
      onClick={handleClick}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {icon && isHover && (
        <IconWrapper>
          <AiOutlineLink />
        </IconWrapper>
      )}
      <Tag id={id}>{children}</Tag>
    </Wrapper>
  );
};

export { Heading };
