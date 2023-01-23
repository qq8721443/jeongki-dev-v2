export const onCreateBabelConfig = ({ actions }) => {
  const { setBabelPlugin } = actions;

  setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};
