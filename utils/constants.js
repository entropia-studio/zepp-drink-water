import { getDeviceInfo, SCREEN_SHAPE_SQUARE } from '@zos/device';

export const {
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT,
  screenShape,
} = getDeviceInfo();
export const isSquare = SCREEN_SHAPE_SQUARE === screenShape;
