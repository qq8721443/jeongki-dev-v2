import styled from '@emotion/styled';

import { CgCalendarDates } from 'react-icons/cg';
import { BiTimeFive } from 'react-icons/bi';

interface PostProps {
  title?: string;
  content?: string;
  date?: string;
  readTime?: string;
  width?: number | string;
  onClick?: () => void;
}

const PostContainer = styled.div<PostProps>`
  position: relative;
  box-sizing: border-box;
  width: ${(props) => props.width};
  padding: 18px;
  border-top: 1px solid #e1e1e1;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 1.25rem;
`;

const Content = styled.div`
  color: #bcbcbc;
`;

const Additional = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding-top: 8px;
  color: #bcbcbc;
  font-size: 14px;
`;

const VerticalAlign = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Post = ({
  title = 'Post Title',
  content = 'Post Content',
  date = '2022-02-02',
  readTime = '3 min read',
  width = 300,
  onClick = () => console.log('Post Clicked'),
}: PostProps) => {
  if (typeof width === 'number') {
    width = width + 'px';
  }

  const handleClick = () => {
    onClick?.();
  };

  return (
    <PostContainer width={width} onClick={handleClick}>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Additional>
        <VerticalAlign>
          <CgCalendarDates />
          {date}
        </VerticalAlign>
        <VerticalAlign>
          <BiTimeFive />
          {readTime}
        </VerticalAlign>
      </Additional>
    </PostContainer>
  );
};

export { Post };
