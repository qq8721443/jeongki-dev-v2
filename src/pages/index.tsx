import type { HeadFC } from 'gatsby';
import { Layout } from '../components';

const HomePage = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
};

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
