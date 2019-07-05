import { Component, OnInit, Input } from '@angular/core';
import { UserInfoState } from 'src/app/core/reducers/userInfo-reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/reducers/reducers-config';
import { MenuConfig } from 'src/app/core/menu-config';
import { RouterState } from 'src/app/core/reducers/router-reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  @Input() userInfo: UserInfoState;

  routerState: RouterState = {

    /* -------- 登录来源 -------- */
    loginSource: '',

    /* -------- 去往路径 -------- */
    goPath: '',

    /* -------- 当前路径 -------- */
    currentPath: '',

    /* -------- 当前路由对象 -------- */
    currentMenu: {},
  };

  roleAllowPath: string;

  menuConfig: any[] = MenuConfig;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.select('routerState').subscribe(res => this.routerState = res);

    this.store.select('userInfoState').subscribe(res => this.roleAllowPath = res.roleAllowPath);
  }

  navigate(childrenLink) {
    if (this.roleAllowPath.includes('**')) {
      this.router.navigateByUrl(childrenLink[0].key);
    } else {
      childrenLink.map(l => this.roleAllowPath.includes(l.key))
      for (let i = 0; i < childrenLink.length; i++) {
        if (this.roleAllowPath.includes(childrenLink[i].key)) {
          this.router.navigateByUrl(childrenLink[i].key);
          break;
        }
      }
    }
  }

}
