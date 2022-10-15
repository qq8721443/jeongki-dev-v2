import * as React from 'react';
import type { HeadFC } from 'gatsby';

const NotFoundPage = () => {
  return <h1>404 Not Found</h1>;
};

export const Head: HeadFC = () => {
  return <title>Not Found</title>;
};

export default NotFoundPage;
