import { getDeviceInfo } from '@zos/device';
import { getText } from '@zos/i18n';
import * as hmUI from '@zos/ui';
import { px } from '@zos/utils';

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const TEXT_STYLE = {
  text: getText('appName'),
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

export const EQUIVALENT_TO_BUTTON = {
  press_color: 0x333333,
  normal_color: 0x1a1a1a,
  x: px(108),
  y: px(50),
  w: DEVICE_WIDTH - 2 * px(108),
  h: px(56),
  color: 0xffffff,
  text_size: px(32),
  radius: px(28),
};
