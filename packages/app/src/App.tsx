/*
 * @Author: swcbo
 * @Date: 2022-03-20 15:24:05
 * @LastEditors: swcbo
 * @LastEditTime: 2022-03-21 15:26:28
 * @FilePath: /fewer/packages/app/src/App.tsx
 * @Description: 入口文件
 */
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import history from '@/plugins/history';
import PaintPage from './pages/paint';
const App = () => {
  return (
    <>
      <PaintPage />
      <Router history={history}></Router>
    </>
  );
};
export default App;
