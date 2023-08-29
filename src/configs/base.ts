import { isWechat } from '@/utils/common';

export const ENV = process.env.NODE_ENV !== 'production';
export const STORE_USER_KEY = 'yolosq.user';
export const STORE_THEME_KEY = 'yolosq.theme.key';
export const CURRENT_PATCH = 'yolosq.theme.key';
export const USER_TOKEN = 'yolosq.user.token';
export const USER_INFO_KEY = 'yolosq.user.info';
export const USER_SETTING_THEME = 'yolosq.user.setting.theme';
export const PATH_BEFORELOGIN = 'yolosq.path.before.login';
export const QINIUURL = 'https://imgs.yolosq';
export const QINIU_UPLOADURL = 'https://upload-z1.qiniup.com';

export const API_URL = process.env.API_URL || '';

export const WECHAT_OAUTH_URL = isWechat()
  ? `${API_URL}/oauth/wx`
  : `${API_URL}/oauth/wechat`;

export const GITHUB_OAUTH_URL = `${API_URL}/oauth/github`;

export const CABIN_CLASS_COLOR = {
  // First/Suites 头等舱/套房
  F: '#92311B',
  // Business 商务舱
  J: '#12447D',
  // Premium Economy 优选经济舱
  S: '#435151',
  // Economy 经济舱
  Y: '#276753',
};
