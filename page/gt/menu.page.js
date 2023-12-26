import { push } from '@zos/router';
import * as hmUI from '@zos/ui';
import { log as Logger } from '@zos/utils';
import { EQUIVALENT_TO_BUTTON } from 'zosLoader:./menu.page.[pf].layout.js';

const logger = Logger.getLogger('drinkWater');
const globalData = getApp()._options.globalData;
Page({
  onInit() {
    logger.debug('page Menu onInit invoked');
  },
  build() {
    logger.debug('page Menu build invoked');
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...EQUIVALENT_TO_BUTTON,
      text: 'Index',
      click_func: () => {
        push({
          url: 'page/gt/index.page',
        });
      },
    });
    // hmUI.createWidget(hmUI.widget.BUTTON, {
    //   ...EQUIVALENT_TO_BUTTON,
    //   text: 'Add water',
    //   y: px(125),
    //   click_func: () => {
    //     push({
    //       url: 'page/gt/food-list',
    //     });
    //   },
    // });
  },
  onDestroy() {
    logger.debug('page Menu onDestroy invoked');
  },
});
