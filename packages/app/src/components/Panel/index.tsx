/*
 * @Author: swcbo
 * @Date: 2022-03-21 18:14:11
 * @LastEditors: swcbo
 * @LastEditTime: 2022-03-21 23:24:28
 * @FilePath: /fewer/packages/app/src/components/Panel/index.tsx
 * @Description: 可拖动控制板
 */
import { FC, memo, MouseEvent, useEffect, useRef, useState } from 'react';
import styles from './index.module.less';
interface IPanel {
  top?: number | string;
  left?: number | string;
  right?: number;
}
const Panel: FC<IPanel> = ({ children, top = 70, left, right }) => {
  const canMove = useRef(false);
  const [position, setPosition] = useState({ top, left, right });
  const barRef = useRef<HTMLDivElement>(null);
  const toggleOpen = (move: boolean) => (event: MouseEvent<HTMLDivElement>) => {
    canMove.current = move;
    event.stopPropagation();
  };
  useEffect(() => {
    const onMouseMove = (event: globalThis.MouseEvent) => {
      if (canMove.current && barRef.current) {
        setPosition({
          top: event.clientY - 5,
          left: event.clientX - barRef.current.clientWidth / 2,
          right: undefined,
        });
      }
      return false;
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div style={{ ...position }} ref={barRef} className={`${styles.panel} mouse`}>
      <div
        className={styles.drag_bar}
        onMouseDownCapture={toggleOpen(true)}
        onMouseUpCapture={toggleOpen(false)}
      />
      {children}
    </div>
  );
};
export default memo(Panel);
