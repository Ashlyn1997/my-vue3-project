/**
 * 判断 iphone10 以上机型
 */
export const isIphone = () => {
  const { model } = uni.getSystemInfoSync();
  return /iphone[\s]?((x|x[rs])|1[1-9])/.test(model.toLowerCase());
};