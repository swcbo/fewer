/*
 * @Author: swcbo
 * @Date: 2022-03-21 21:56:42
 * @LastEditors: swcbo
 * @LastEditTime: 2022-03-21 22:03:35
 * @FilePath: /fewer/packages/app/src/components/IconMenu/index.tsx
 * @Description: 通用iconMenu
 */
import { FC, HTMLAttributes, memo } from 'react';
import styles from './index.module.less';
interface IIconMenu extends HTMLAttributes<HTMLDivElement> {}
const Menu: FC<IIconMenu> = ({ children, ...other }) => {
  return (
    <div className={styles.menu} {...other}>
      {children}
    </div>
  );
};
export default memo(Menu);
