import { HttpService } from 'src/app/ng-relax/services/http.service';
import { SatisfactionUpdateComponent } from './satisfaction-update/satisfaction-update.component';
import { Component, OnInit } from '@angular/core';
import { NzDrawerService, NzMessageService } from 'ng-zorro-antd';
import { CreateDrawer } from 'src/app/ng-relax/decorators/createDrawer.decorator';

@Component({
  selector: 'app-satisfaction',
  templateUrl: './satisfaction.component.html',
  styleUrls: ['./satisfaction.component.scss']
})
export class SatisfactionComponent implements OnInit {
  dataList:any = [];
  detail_title:any = '';
  SyllabusAll:any = [];
  satisfaction:any = '';
  ratio:any = "";
  teacherRankId:any = "";
  isCancel:any = false;
  ListId:any ="";
  delectId:any = '';
  showDelect:any = false;
  satisfactionList:any = [{
    name:'满意',
  },{
    name:'不满意'
  }];
  types:any = false;
  constructor(
    private http: HttpService,
    private drawer: NzDrawerService,
    private message: NzMessageService,
  ) {
    this.selectquery();
    this.http.post('/satisfaction/selectPosition', {}, false).then(res => {
      this.SyllabusAll = res.result.bandList;
    });
   }

  ngOnInit() {
  }

  // @CreateDrawer('满意度信息', SatisfactionUpdateComponent, 360) update: (dataInfo?) => void;

  selectquery() {
    this.http.post('/satisfaction/showSatisfaction', {},false).then(res => {
      this.dataList = res.result.bonusList;
    }).catch();


  }
  handleCancel(){
    this.isCancel = false;
  }
  handleOk(){
    if (!this.satisfaction) {
      this.message.create('error', '请选择门店满意度');
      return false;
    }
    if (!this.ratio && this.ratio!=0) {
      this.message.create('error', '请输入门店满意系数');
      return false;
    }
    if (!this.teacherRankId) {
      this.message.create('error', '请选择职位');
      return false;
    }  
    let paramJson = JSON.stringify({
      satisfaction: this.satisfaction,
      ratio : this.ratio,
      teacherRankId : this.teacherRankId
    })

    if (!this.types){
      this.http.post('/satisfaction/saveSatisfaction', { paramJson }).then(res => {
      this.selectquery();
      this.isCancel = false;
      });
    }else{
      this.http.post('/satisfaction/updateSatisfaction', { id: this.ListId, ratio: this.ratio, teacherRankId: this.teacherRankId }).then(res => {
        this.selectquery();
        this.isCancel = false;
      });
    }  

  }
  update(id){
    this.isCancel = true; 
    this.satisfaction = '';
    this.ratio = "";
    this.teacherRankId = "";
    this.ListId = id;
    if(id != 0){
      this.types = true;
      this.http.post('/satisfaction/selectSatisfaction', { id: id }, false).then(res => {
        this.satisfaction = res.result.satisfaction;
        this.ratio = res.result.ratio;
        this.teacherRankId = res.result.teacherRankId;
      });
    }else{
      this.types = false;
    }
  }
  remove(id){
    this.delectId = id;
    this.showDelect = true;

  }
  noDelect(){
    this.showDelect = false;
  }
  isshowDelect(){
    this.http.post('/satisfaction/deleteSatisfaction', { id: this.delectId }, false).then(res => {
      if(res.code==1000){
        this.message.create('success', '删除成功!');
        this.selectquery();
        this.showDelect = false;
      }else{
        this.message.create('success', '删除失败!');
      }
    }).catch(err => this.message.create('success', '删除失败!') );
  }
  
}
