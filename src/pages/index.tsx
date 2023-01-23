import type { HeadFC } from 'gatsby';

const HomePage = () => {
  return <h1>Home Page</h1>;
};

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
