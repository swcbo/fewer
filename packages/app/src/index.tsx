/*
 * @Author: swcbo
 * @Date: 2022-03-19 20:55:48
 * @LastEditors: swcbo
 * @LastEditTime: 2022-03-20 15:23:50
 * @FilePath: /fewer/packages/app/src/index.tsx
 * @Description: 入口文件
 */
import '@/assets/css/common.less';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { GlobalProvider } from 'rmox';
import App from './App';
render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>,
  document.getElementById('root'),
);
