/**
 * @method 动态添加抽屉组件，点击保存回调方法
 * @param requestPath 请求地址
 * @author phuhoang
 */

export function DrawerCallback() {
  return function (target, propertyKey) {
    target[propertyKey] = function (e) {
      !e && this.drawerRef.close(e);
    }
  }
}