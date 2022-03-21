/*
 * @Author: swcbo
 * @Date: 2022-03-21 18:07:24
 * @LastEditors: swcbo
 * @LastEditTime: 2022-03-21 23:23:17
 * @FilePath: /fewer/packages/app/src/pages/paint/index.tsx
 * @Description:
 */
import IconMenu from '@/components/IconMenu';
import Panel from '@/components/Panel';
import { FC } from 'react';

import styles from './index.module.less';
const PaintPage: FC = () => {
  return (
    <>
      {/* 顶部按钮 */}
      <div className={styles.top_icons}>
        <IconMenu />
        <IconMenu />
        <IconMenu />
        <IconMenu />
      </div>
      {/* 组件 */}
      <Panel left={10}></Panel>
      {/* 配置 */}
      <Panel right={10}></Panel>
      <div className={`${styles.bottom_center} mouse`}></div>
      {/* 底部按钮 */}
      <div className={styles.bottom_icons}>
        <IconMenu />
        <IconMenu />
        <IconMenu />
      </div>
    </>
  );
};

export default PaintPage;
