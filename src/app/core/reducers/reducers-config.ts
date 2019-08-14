<<<<<<< HEAD
import { TemplateRef } from '@angular/core';
import { routerReducer, RouterState } from './router-reducer';
import { userInfoReducer, UserInfoState } from "./userInfo-reducer";
import { breadcrumbReducer } from './breadcrumb-reducer';
=======
import { routerReducer, RouterState } from './router-reducer';
import { userInfoReducer, UserInfoState } from "./userInfo-reducer";
>>>>>>> upgrade

export const reducersConfig = {
  userInfoState  : userInfoReducer,
  routerState    : routerReducer,
<<<<<<< HEAD
  breadcrumbState: breadcrumbReducer
=======
>>>>>>> upgrade
}

export interface AppState {
  userInfoState  : UserInfoState;         // 用户信息
  routerState    : RouterState;           // 路由跳转信息
<<<<<<< HEAD
  breadcrumbState: TemplateRef<any>;      // 面包屑内容
=======
>>>>>>> upgrade
}