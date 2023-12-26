import * as hmUI from '@zos/ui';
import { log as Logger } from '@zos/utils';
import {
  PROGRESS_BAR_BACKGROUND,
  PROGRESS_BAR_PERCENTAGE,
  TEXT_STYLE,
} from 'zosLoader:./index.page.[pf].layout.js';
import { isSquare } from '../../utils/constants';

const logger = Logger.getLogger('helloworld');
Page({
  roundProgressBar(percentage) {
    const degress = (percentage / 100) * 360;
    const startAngle = -90;
    const endAngle = startAngle + degress;
    logger.log(endAngle);
    hmUI.createWidget(hmUI.widget.ARC, PROGRESS_BAR_BACKGROUND);
    hmUI.createWidget(hmUI.widget.ARC, {
      ...PROGRESS_BAR_PERCENTAGE,
      end_angle: endAngle,
    });
  },
  onInit() {
    logger.debug('page Index onInit invoked');
  },
  build() {
    logger.debug('page Index build invoked');
    hmUI.createWidget(hmUI.widget.TEXT, TEXT_STYLE);
    try {
      !isSquare && this.roundProgressBar(65);
    } catch (error) {
      logger.error(error);
    }
  },
  onDestroy() {
    logger.debug('page Index onDestroy invoked');
  },
});
