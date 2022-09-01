/*
 * @Author: swcbo
 * @Date: 2022-03-21 21:56:42
 * @LastEditors: swcbo
 * @LastEditTime: 2022-09-01 16:19:35
 * @FilePath: /fewer/packages/app/src/components/IconMenu/index.tsx
 * @Description: 通用iconMenu
 */
import {
  Children,
  FC,
  HTMLAttributes,
  memo,
  useState,
  cloneElement,
  ReactElement,
  useRef,
} from 'react';
import styles from './index.module.less';
interface IIconMenu extends HTMLAttributes<HTMLDivElement> {}
const Menu: FC<IIconMenu> = ({ children, ...other }) => {
  const [show, setShow] = useState(true);
  const onMenuClick = () => {
    setShow(!show);
  };
  const menu = useRef<HTMLDivElement>(null);
  const { width, top, height, left } = menu.current?.getBoundingClientRect() ?? {};

  const childrenWithProps = Children.map(children, (child) => {
    if (child) {
      return cloneElement(child as ReactElement, {
        className: show ? styles.show : styles.hidden,
        style: !show && {
          width,
          top,
          left,
          height,
        },
      });
    }
    return <></>;
  });
  return (
    <>
      <div className={styles.menu} {...other} onClick={onMenuClick} ref={menu}></div>
      {childrenWithProps}
    </>
  );
};
export default memo(Menu);
