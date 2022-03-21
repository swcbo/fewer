/*
 * @Author: swcbo
 * @Date: 2022-01-18 22:41:55
 * @LastEditors: swcbo
 * @LastEditTime: 2022-03-21 15:23:41
 * @FilePath: /fewer/packages/app/config/theme/index.ts
 * @Description: 主题配置文件
 */
import fs from 'fs';
import lessToJS from 'less-vars-to-js';
import path from 'path';
export const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './variables.less'), 'utf8'),
);
