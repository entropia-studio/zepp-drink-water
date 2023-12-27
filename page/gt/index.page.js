import { getText } from '@zos/i18n';
import * as hmUI from '@zos/ui';
import { log as Logger } from '@zos/utils';
import {
  ALIGN_DESC_GROUP,
  DAILY_QUANTITY_TEXT_SIZE,
  DRINK_WATER_TITLE,
  PROGRESS_BAR_BACKGROUND,
  PROGRESS_BAR_PERCENTAGE,
  UNIT_TEXT,
  UNIT_TEXT_SIZE,
} from 'zosLoader:./index.page.[pf].layout.js';
import { DEVICE_WIDTH, isSquare } from '../../utils/constants';

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
  buildDailyQuantity(quantity) {
    const { width: w1 } = hmUI.getTextLayout('' + quantity, {
      text_size: DAILY_QUANTITY_TEXT_SIZE,
      text_width: 0,
      wrapped: 0,
    });

    const { width: w2 } = hmUI.getTextLayout(getText('unit'), {
      text_size: UNIT_TEXT_SIZE,
      text_width: 0,
      wrapped: 0,
    });

    const w = w1 + w2;
    const x = Math.round((DEVICE_WIDTH - w) / 2);
    logger.log('w1', w1, 'w2', w2, 'w', w, 'x', x);

    const group = hmUI.createWidget(hmUI.widget.GROUP, {
      ...ALIGN_DESC_GROUP,
      x,
      w,
    });

    group.createWidget(hmUI.widget.TEXT, {
      ...DAILY_QUANTITY_TEXT,
      text: `${quantity}`,
      text_size: DAILY_QUANTITY_TEXT_SIZE,
      x: px(0),
      w: w1,
      color: 0xffffff,
    });
    group.createWidget(hmUI.widget.TEXT, {
      ...UNIT_TEXT,
      x: w - w2 + px(8),
      w: w2,
    });
  },
  onInit() {
    logger.debug('page Index onInit invoked');
  },
  build() {
    logger.debug('page Index build invoked');
    try {
      !isSquare && this.roundProgressBar(65);
      hmUI.createWidget(hmUI.widget.TEXT, DRINK_WATER_TITLE);
      this.buildDailyQuantity(0);
    } catch (error) {
      logger.error(error);
    }
  },
  onDestroy() {
    logger.debug('page Index onDestroy invoked');
  },
});
