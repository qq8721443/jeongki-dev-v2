import * as React from 'react';
import styled from '@emotion/styled';

interface ToggleContainerProps {
  width: number | string;
  height: number | string;
  padding?: number | string;
  radius?: string;
  color?: string[];
  onClick?: () => void;
}

const ToggleContainer = styled.div<ToggleContainerProps>`
  position: relative;
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.radius};
  background-color: gray;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ToggleInnerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ToggleInnerButton = styled.div<{ toggleState: boolean; size: string }>`
  position: absolute;
  left: ${(props) => (props.toggleState ? 0 : `calc(100% - ${props.size})`)};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background-color: #fff;
  transition: left 0.3s ease;
`;

const ToggleButton = ({
  width = 100,
  height = 30,
  padding = 3,
  color = ['#7699F5', '#FAA352'],
  onClick = () => console.warn('Please add onClick handler function.'),
}: ToggleContainerProps) => {
  // TODO: 숫자 -> 문자열로 변경하는 부분이 많으면 util 함수로 따로 빼기
  if (typeof width === 'number') {
    width = width + 'px';
  }
  if (typeof height === 'number') {
    height = height + 'px';
  }
  if (typeof padding === 'number') {
    padding = padding + 'px';
  }

  const [state, setState] = React.useState<boolean>(true);

  const handleToggle = () => {
    onClick?.();
    setState((prev) => !prev);
  };

  return (
    <ToggleContainer
      width={width}
      height={height}
      padding={padding}
      radius={`calc(${height}/2)`}
      color={color as string & string[]}
      onClick={handleToggle}
      style={{ backgroundColor: state ? color[0] : color[1] }}
    >
      <ToggleInnerContainer>
        <ToggleInnerButton
          size={`calc(${height} - 2*${padding})`}
          toggleState={state}
        />
      </ToggleInnerContainer>
    </ToggleContainer>
  );
};

export { ToggleButton };
