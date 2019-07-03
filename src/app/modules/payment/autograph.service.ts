import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Md5 } from "ts-md5/dist/md5";
import { AppState } from '../../core/reducers/reducers-config';
import { HttpService } from 'src/app/ng-relax/services/http.service';

@Injectable()
export class AutographService {

  domain = 'http://pay.haochengzhang.com/pay';

  getAutograph(): Promise<object> {
    return new Promise((resolve, reject) => {
      this.http.post('/payment/intoOnlinePayment', {}, false).then(res => {
        let nowDate = new Date().getTime();
        this.store.select('userInfoState').subscribe((userInfo: any) => {
          resolve({
            sign: Md5.hashStr(res.result.sign + nowDate),
            time: nowDate,
            shopId: userInfo.store.id,
            shopName: userInfo.store.shopName,
            loginId: userInfo.id,
            loginName: userInfo.name,
            productCount: 1,
            orderFrom: 'ERP'
          })
        }, err => reject(err));
      }, err => reject(err));
    })
  }

  constructor(
    private http: HttpService,
    private store: Store<AppState>
  ) { }
}
