<<<<<<< HEAD
=======
import { Action } from '@ngrx/store';
import { environment } from 'src/environments/environment';
>>>>>>> upgrade
/**
 * @method 记录用户信息
 * 
 * @author phuhoang
 */
<<<<<<< HEAD
import { Action } from '@ngrx/store';

export function userInfoReducer(state: UserInfoState, action: Action) {
=======

export function userInfoReducer (state: UserInfoState, action: Action) {
>>>>>>> upgrade
  switch (action.type) {
    case 'setUserInfo':
      try {
        let roleAllowPath = [];
        action['payload'].roles.map(role => {
          role.roleJsonInfo && (roleAllowPath = roleAllowPath.concat(role.roleJsonInfo.split(',')));
        });
        action['payload']['roleAllowPath'] = Array.from(new Set(roleAllowPath)).join(',');
<<<<<<< HEAD
        window.localStorage.setItem('userInfo', JSON.stringify(action['payload']));
=======
        window.localStorage.setItem(`userInfo${environment.version.replace(/\./g, '')}`, JSON.stringify(action['payload']));
>>>>>>> upgrade
        return action['payload'];
      } catch (error) {
        return state;
      }
<<<<<<< HEAD

=======
    
>>>>>>> upgrade
    default:
      return state;
  }
}
export interface UserInfoState {
<<<<<<< HEAD
  name: string;
  email?: string;
  id: number;
  roles: any[];
  status: number;
  store: object;
  roleAllowPath?: string;
=======
  name    : string;
  id      : number;
  roles   : RoleConfig[];
  status  : number;
  store   : StoreConfig;
  roleAllowPath?: string;
}
interface RoleConfig {
  id      : number;
  code    : string;
  roleJsonInfo: string;
}
interface StoreConfig {
  id      : number;
  logo    : string;
  shopName: string;
  shopBrand: ShopBrand
}
interface ShopBrand {
  id      : number;
  brandName: string;
>>>>>>> upgrade
}