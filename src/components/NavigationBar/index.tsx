import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ToggleButton } from '../ToggleButton';

export const NavigationBar = () => {
  const MENU_LIST = [
    { name: '홈', link: '/' },
    { name: '소개', link: '/about' },
    { name: '글목록', link: '/posts' },
  ];

  return (
    <Container>
      <InnerContainer>
        <LogoContainer>
          <Link to="/">
            Jeongki<span>.dev</span>
          </Link>
        </LogoContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <MenuList>
            {MENU_LIST.map((item) => (
              <MenuListItem key={item.name}>
                <Link to={item.link}>{item.name}</Link>
              </MenuListItem>
            ))}
          </MenuList>
          <ToggleButton width={60} height={26} />
        </div>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div({
  width: '100%',
  height: '60px',
  padding: '0 40px',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',

  '@media (max-width: 640px)': {
    padding: '0 20px',
  },
});

const InnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1000px',
  height: '100%',
  margin: '0 auto',
});

const LogoContainer = styled.div({
  color: '#777',
  fontSize: '18px',
  fontWeight: 500,
  letterSpacing: '1px',

  span: {
    color: '#7699F5',
    fontWeight: 700,
  },
});

const MenuList = styled.ul({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  color: '#777',
});

const MenuListItem = styled.li({
  marginRight: '16px',
});
