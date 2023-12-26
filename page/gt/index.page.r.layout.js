import { getDeviceInfo } from '@zos/device';
import { getText } from '@zos/i18n';
import * as hmUI from '@zos/ui';
import { px } from '@zos/utils';

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const TEXT_STYLE = {
  text: getText('Index'),
  x: px(42),
  y: px(200),
  w: DEVICE_WIDTH - px(42) * 2,
  h: px(100),
  color: 0xffffff,
  text_size: px(36),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.WRAP,
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
  attrs: {
    text: '',
  },
  styles: {
    x: px(150),
    y: px(142),
    w: px(180),
    h: px(110),
    color: 0xffffff,
    text_size: px(100),
    align_h: hmUI.ALIGN_CENTER_H,
    align_v: hmUI.ALIGN_CENTER_V,
  },
};
