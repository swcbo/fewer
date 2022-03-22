/*
 * @Author: swcbo
 * @Date: 2022-03-21 18:07:24
 * @LastEditors: swcbo
 * @LastEditTime: 2022-03-22 00:05:48
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

      {/* 配置 */}

      <div className={`${styles.bottom_center} mouse`}></div>
      {/* 底部按钮 */}
      <div className={styles.bottom_icons}>
        <IconMenu>
          <Panel left={10}></Panel>
        </IconMenu>
        <IconMenu>
          <Panel right={10}></Panel>
        </IconMenu>
        <IconMenu />
      </div>
    </>
  );
};

export default PaintPage;
