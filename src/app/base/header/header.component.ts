<<<<<<< HEAD
import { environment } from './../../../environments/environment';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { MenuConfig } from './../../core/menu-config';
import { Router } from '@angular/router';
import { UserInfoState } from '../../core/reducers/userInfo-reducer';
import { Component, EventEmitter, Output, Input, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'ea-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Output() isCollapsedChange: EventEmitter<boolean> = new EventEmitter();

  @Input() isCollapsed: boolean = false;

  @Input() userInfo: UserInfoState;

  @ViewChild('notificationTmpt') notificationTmpt: TemplateRef<any>

  @ViewChild('audio') audio;

  constructor(
    private router: Router,
    private wsService: WebsocketService,
    private http: HttpService,
    private websocket: WebsocketService,
    private notification: NzNotificationService
  ) {  
    // this.websocket.createObservableSocket(`${environment.domainWs}/socketServer`).subscribe(res => {
    //   if (res.flag == 1) {
    //     this.notification.info('您有新的预约，请及时处理', `用户：<b>${res.memberName}</b> 预约了老师<b>${res.employeeName}</b>于<i>${res.reserveDate}</i>`)
    //   } else if (res.flag == 2) {
    //     this.notification.success('您有新的线索，请及时跟进', '');
    //   }
    //   this.audio.nativeElement.play();
    // });
  }
  

  searchValue: string;
  onChange(value: any): void {
    this.autoComplateOptions = !value ? this.complateOptions : JSON.parse(JSON.stringify(this.complateOptions)).filter( res => {
      !res.isLeaf && (res.children = res.children.filter(item => item.title.indexOf(value) > -1));
      return res.isLeaf ? res.title.indexOf(value) > -1 : res.children.length > 0;
    })
  }
  ngOnInit() {
  }

  autoComplateOptions: any[] = [];
  complateOptions = MenuConfig;

  keyupEnter(value?) {
    if (value) {
      this.router.navigateByUrl(value['key']);
    } else if (typeof this.searchValue === 'object') {
      this.router.navigateByUrl(this.searchValue['key']);
    }
  }

  TapIsCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
=======
import { AppReuseStrategy } from 'src/app/core/app-reuse-strategy';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserInfoState } from 'src/app/core/reducers/userInfo-reducer';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() userInfo: UserInfoState;

  @ViewChild('audio') audio;

  menuList: Array<{ title: string, path: string }> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    // this.openWs();

    this.router.events.pipe(
      filter(event => { return event instanceof NavigationEnd }),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      },
      filter((route: any) => route.outlet === 'primary'))
    ).subscribe((event) => {
      let pathArray = [];
      event.pathFromRoot.map(res => {
        res.url['value'][0] && pathArray.push(res.url['value'][0]);
      });
      var isExist = this.menuList.every(item => item.title != event.data['value'].title);
      if (isExist) {
        this.menuList.push({ title: event.data['value'].title, path: pathArray.join('/') });
        this.routeActiveIndex = this.menuList.length - 1;
      } else {
        this.menuList.map((res, idx) => res.title == event.data['value'].title && (this.routeActiveIndex = idx));
      }
    });
  }

  ngOnInit() {
    
  }

  routeActiveIndex: number;
  closeTab(e) {
    AppReuseStrategy.deleteRouteSnapshot(this.menuList[e].path.slice(1));
    this.menuList.splice(e, 1);
    if (e === this.routeActiveIndex) {
      this.routeActiveIndex = this.menuList.length - 1;
      this.router.navigateByUrl(this.menuList[this.menuList.length - 1].path);
    } else {
      this.routeActiveIndex = this.routeActiveIndex > e ? this.routeActiveIndex - 1 : this.routeActiveIndex;
    }
  }
  tabSelect(e) {
    this.router.navigateByUrl(this.menuList[e].path);
>>>>>>> upgrade
  }

  signOut(): void {
    window.localStorage.removeItem('userInfo');
    this.router.navigateByUrl('/login');
  }


<<<<<<< HEAD


=======
>>>>>>> upgrade
}
