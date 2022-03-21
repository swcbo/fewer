/*
 * @Author: swcbo
 * @Date: 2022-03-21 16:43:20
 * @LastEditors: swcbo
 * @LastEditTime: 2022-03-21 17:10:39
 * @FilePath: /fewer/packages/app/src/plugins/elementConfig.ts
 * @Description: 组件配置
 */
import { ReactNode } from 'react';
import { Input } from 'antd';
export interface ElementConfig {
  element?: ReactNode;
  style?: React.CSSProperties;
}

const Config: ElementConfig[] = [
  {
    element: Input,
    style: { width: '100%' },
  },
];
export default Config;
