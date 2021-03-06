<<<<<<< HEAD
import { NzMessageService } from 'ng-zorro-antd';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { AppState } from './reducers/reducers-config';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
=======
import { AppState } from './reducers/reducers-config';
import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Store } from '@ngrx/store';
import { MenuConfig } from './menu-config';
import { environment } from 'src/environments/environment';
>>>>>>> upgrade

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
<<<<<<< HEAD
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private message: NzMessageService
  ) {

    /* ---------- 监听路由变化, 获取登录来源页, 去往页面， 当前页 ---------- */
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        store.dispatch({ type: 'goPath', payload: event.url });
        if (event.url.indexOf('/login') === -1) {
          store.dispatch({ type: 'loginSource', payload: event.url });
        }
        if (event.url.indexOf('/home/account/modify') > -1) {
          store.dispatch({ type: 'loginSource', payload: '/home' });
=======

  menuConfig: any[] = MenuConfig;
  
  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    try {
      let userInfo = JSON.parse(window.localStorage.getItem(`userInfo${environment.version.replace(/\./g, '')}`));
      if (!userInfo.id) throw "未登录";
      this.store.dispatch({ type: 'setUserInfo', payload: userInfo });
    } catch (e) {
      this.router.navigateByUrl('/login');
    }

     /* ---------- 监听路由变化, 获取登录来源页, 去往页面， 当前页 ---------- */
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.store.dispatch({ type: 'goPath', payload: event.url });
        if (event.url.indexOf('/login') === -1) {
          this.store.dispatch({ type: 'loginSource', payload: event.url });
        }
        if (event.url.indexOf('/home/account/modify') > -1) {
          this.store.dispatch({ type: 'loginSource', payload: '/home/index' });
>>>>>>> upgrade
        }
      }

      if (event instanceof NavigationEnd) {
<<<<<<< HEAD
        store.dispatch({ type: 'setBreadcrumb' });
        store.dispatch({ type: 'currentPath', payload: event.url });
      }
    });

    try {
      let userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
      if (!userInfo.id) throw "未登录";
    } catch (e) {
      this.router.navigateByUrl('/login');
    }
=======
        this.store.dispatch({ type: 'setBreadcrumb' });
        this.store.dispatch({ type: 'currentPath', payload: event.url });
        this.menuConfig.map(res => {
          if (event.url.indexOf(res.key) > -1 && res.key != '/home/index' || event.url == '/home/index' && res.key == '/home/index') {
            this.store.dispatch({ type: 'currentMenu', payload: res });
          }
        })
      }
    });
>>>>>>> upgrade
  }
}
