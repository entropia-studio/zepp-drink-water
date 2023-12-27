import { getDeviceInfo } from '@zos/device';
import { getText } from '@zos/i18n';
import * as hmUI from '@zos/ui';
import { px } from '@zos/utils';

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const DRINK_WATER_TITLE = {
  text: getText('appName'),
  x: px(0),
  y: px(64),
  w: px(480),
  h: px(46),
  color: 0xffffff,
  text_size: px(36),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
};

export const PROGRESS_BAR_BACKGROUND = {
  x: 15,
  y: 15,
  w: DEVICE_WIDTH - 30,
  h: DEVICE_HEIGHT - 30,
  start_angle: 0,
  end_angle: 360,
  color: 0x0e1b4e,
  line_width: 15,
};
export const PROGRESS_BAR_PERCENTAGE = {
  x: 15,
  y: 15,
  w: DEVICE_WIDTH - 30,
  h: DEVICE_HEIGHT - 30,
  start_angle: -90,
  color: 0x4490e2,
  line_width: 15,
};

export const DRINK_WATER_VALUE = {
  x: px(150),
  y: px(142),
  w: px(180),
  h: px(110),
  color: 0xffffff,
  text_size: px(100),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
};

export const DAILY_QUANTITY_TEXT_SIZE = px(100);
export const UNIT_TEXT_SIZE = px(28);
export const ALIGN_DESC_GROUP = {
  x: 0,
  y: px(142),
  w: 0,
  h: px(110),
};
export const DAILY_QUANTITY_TEXT = {
  text: '',
  x: 0,
  y: 0,
  w: 0,
  h: px(100),
  color: 0xffffff,
  text_size: DAILY_QUANTITY_TEXT_SIZE,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
};

export const UNIT_TEXT = {
  text: getText('unit'),
  x: 0,
  y: px(63),
  w: 0,
  h: px(52),
  color: 0x999999,
  text_size: UNIT_TEXT_SIZE,
  align_h: hmUI.align.RIGHT,
  align_v: hmUI.align.BOTTOM,
};
