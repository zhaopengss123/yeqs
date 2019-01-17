/**
 * @method 动态添加抽屉组件，点击保存回调方法
 * @param requestPath 请求地址
 * @author phuhoang
 */

export function DrawerUpdate(component, title?, width?) {
  return function (target, propertyKey) {
    target[propertyKey] = function (id, info) {
      const drawer = this.drawer.create({
        nzTitle: title || '编辑信息',
        nzWidth: width || 720,
        nzContent: component,
        nzContentParams: { id, info }
      })
      drawer.afterClose.subscribe(res => res && this.listPage && this.listPage.eaTable._request());
    }
  }
}