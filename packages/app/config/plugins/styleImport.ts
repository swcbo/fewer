import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import';
export default () =>
  createStyleImportPlugin({
    resolves: [AntdResolve()],
  });
