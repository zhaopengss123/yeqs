import { environment } from './../../../../environments/environment';
import { ConsumptionsComponents } from './consumptions/consumptions.component';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { DatePipe } from '@angular/common';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd';
import { ListPageComponent } from 'src/app/ng-relax/components/list-page/list-page.component';


@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.scss']
})
export class SettlementComponent implements OnInit {
  @ViewChild('listPage') listPage: ListPageComponent;
  isBtnDisVled = true;
  checked1:any = false;
  checked2: any = false;
  checked3: any = false;
  checked4:any = false;
  checked5: any = false;
  checked6: any = false;
  checked7: any = false;
  tableList:any = [];
  teacherList:any = [];
  classRoomList:any = [];
  employeeId:any = 0;
  roomId: any = 0;
  syllabusName: any = '';  
  dateIndex: any = 0;  
  startDate: any = '';
  endDate: any = '';
  isOkLoading:any = false;
  Tuesday:any = '';
  Wednesday :any = '';
  Thursday :any = '';
  Friday :any = '';
  Saturday :any = '';
  courseNames:any = "";
  passwindow :any= false; 

  startDateList: any = '';
  endDateList: any = '';

  TuesdayList: any = '';
  WednesdayList: any = '';
  ThursdayList: any = '';
  FridayList: any = '';
  SaturdayList: any = '';


  isrepeat:any = false;
  nowtime: any = '';
  cardNumber:any = '';
  showstudentsForm:any = false;
  showListdetail: boolean = false;
  showRecord: boolean = false;
  mobilePhone:any = '';
  showName: any = '';
  showroomName:any = '';
  showemployeeName:any = '';
  studentdata:any = '';
  showAdjust:any = false;
  nowstartDate:any = '';
  nowendDate:any = '';
  showmodelts:any = false;
  memberName:any = '';
  callcurrentDate:any = '';
  SyllabusAllList:any = []; 
  radioValue:any = '';
  RecordList:any = [];
  RecordList1: any = [];
  RecordList2: any = [];
  RecordList3: any = [];
  RecordList4: any = [];
  RecordList5: any = [];
  RecordList6: any = [];
  RecordList7: any = [];  
  showStopcard:any = false;
  stopcardMemberdetail:any = {};
  memberdetailTk:any = {};
  memberdetailTks:any = {};

  datalabelList:any = [];
  dateList:any = [];
  removeRecordData:any = {};

  memberdetail:any = {
    name: '',
    parentName: '',
    birthday: '',
    sex: '',
    havacard: '',
  };
  studentInformation:any = {
    name:'',
    parentName:'',
    birthday:'',
    sex:'',
    havacard:'',
    mobilePhone:''
  }
  constructor(

    private http: HttpService,
    private message: NzMessageService,
    private format: DatePipe,
    private drawer: NzDrawerService

  ) {
    this.seletdataList();
    this.nowDate();
    this.selectSyllabusAll();
    let dates =  new Date(); 
    let Month = (dates.getMonth() + 1) < 10 ? '0' + (dates.getMonth() + 1) : (dates.getMonth() + 1);
    let dayDate = (dates.getDate()) < 10 ? '0' + (dates.getDate()) : (dates.getDate());
    let years  = dates.getFullYear()+'';
    this.nowtime = years + Month + dayDate;
   
  }
seletdataList(){
  this.http.post('/scheduling/selectEmployee', {}, false).then(res => {
    this.teacherList = res.result.list;
  });
  this.http.post('/intelligent/selectScour', {}, false).then(res => {
    this.dateList = res.result.list;
  });  
  
  this.http.post('/scheduling/selectSchedulingAll', {}, false).then(res => {
    this.classRoomList = res.result.list;
  });  
}
selectquery(){
  let paramJson: any = JSON.stringify({
    employeeId: this.employeeId,
    roomId: this.roomId,
    syllabusName: this.syllabusName,
    startDate: this.startDate,
    endDate: this.endDate
  });
  this.http.post('/curriculum/selectCondition', { paramJson }, false).then(res => {
    this.tableList = res.result;
    this.tableList.map( (item,index)=>{
      item.member.map( (items,indexs)=>{
        if (items.expireDate){
        let expireDatearr = items.expireDate.split('-');
        let expireDatestr = expireDatearr[0] + expireDatearr[1] + expireDatearr[2];
        this.tableList[index].member[indexs].expireDate = expireDatestr;
        }
      })
    })
    let startDateList = [],
    endDateList = [],
    TuesdayList = [],
    WednesdayList = [],
    ThursdayList = [],
    FridayList = [],
    SaturdayList = [];
    this.tableList.map( item => {
        if( item.week == '星期一' ){
          startDateList.push(item);
        } else if ( item.week == '星期二' ){
          TuesdayList.push(item);
        } else if (item.week == '星期三') {
          WednesdayList.push(item);
        } else if (item.week == '星期四') {
          ThursdayList.push(item);
        } else if (item.week == '星期五') {
          FridayList.push(item);
        } else if (item.week == '星期六') {
          SaturdayList.push(item);
        } else if (item.week == '星期日') {
          endDateList.push(item);
        }
    })
    this.startDateList = startDateList;
    this.endDateList = endDateList;
    this.TuesdayList = TuesdayList;
    this.WednesdayList = WednesdayList;
    this.ThursdayList = ThursdayList;
    this.FridayList = FridayList;
    this.SaturdayList = SaturdayList;
  });
}
  datefun(index) {
    if (this.dateIndex == 0){
        this.isBtnDisVled = true;
    }else{
        this.isBtnDisVled = false;
    }
    let now: any = new Date();
    let nowDayOfWeek = now.getDay();
    this.startDate = this.showWeekFirstDay(1 - nowDayOfWeek + index);
    this.Tuesday = this.showWeekFirstDay(2 - nowDayOfWeek + index);;
    this.Wednesday = this.showWeekFirstDay(3 - nowDayOfWeek + index);;
    this.Thursday = this.showWeekFirstDay(4 - nowDayOfWeek + index);;
    this.Friday = this.showWeekFirstDay(5 - nowDayOfWeek + index);;
    this.Saturday = this.showWeekFirstDay(6 - nowDayOfWeek + index);;


    this.endDate = this.showWeekFirstDay(7 - nowDayOfWeek + index);
    this.selectquery();
    if (!this.nowstartDate){
    this.nowstartDate = this.startDate;
    this.nowendDate = this.endDate
    }
  };
  showWeekFirstDay(i) {
    let that = this;
    var day3 = new Date();
    day3.setTime(day3.getTime() + i * 24 * 60 * 60 * 1000);
    let Month = (day3.getMonth() + 1) < 10 ? '0' + (day3.getMonth() + 1) : (day3.getMonth() + 1);
    let dayDate = (day3.getDate()) < 10 ? '0' + (day3.getDate()) : (day3.getDate());
    var s3 = day3.getFullYear() + "-" + Month + "-" + dayDate;
    return s3;
  }
  nowDate() {
    this.dateIndex = 0;
    this.datefun(0);
  };
  nextDate() {
    this.dateIndex++;
    this.datefun(this.dateIndex * 7);
  };
  prveDate(){
    if (this.dateIndex>0){
      this.dateIndex--;
      this.datefun(this.dateIndex * 7);
    }
  };
  ngOnInit() {
  }
  //查询弹框
  showstudents(data){
    this.studentInformation = {
      name: '',
      parentName: '',
      birthday: '',
      sex: '',
      havacard: '',
      mobilePhone: ''
    };
    this.mobilePhone = '';
    this.showstudentsForm = true;
    this.showName = data.name;
    this.showroomName = data.roomName;
    this.showemployeeName = data.employeeName;
    this.studentdata = data;
  }
  closestudentsForm(){
    this.showstudentsForm = false;
  }
  isstudentsForm(){
    //this.showstudentsForm = false;
    let paramJson: any = JSON.stringify({
      syllabusName: this.studentdata.name,
      currentDate: this.studentdata.currentDate,
      startTime: this.studentdata.startTime,
      endTime: this.studentdata.endTime,
      roomName: this.studentdata.roomName,
      employeeId: this.studentdata.employeeId,
      id: this.studentdata.id
    });
    
    if (!this.studentInformation.name){
      this.message.create('error', '学员信息不可以为空！');
      return false;
    }
    this.isOkLoading = true;
    this.http.post('/curriculum/insertMemberMsg', { 
      paramJson,
      memberId: this.studentInformation.memberId,
      memberName: this.studentInformation.name,
      parentName: this.studentInformation.parentName,
      mobilePhone: this.studentInformation.mobilePhone
    }, false).then(res => {
      this.isOkLoading = false;
      if (res.code == 1000) {
        this.message.create('success', '添加成功！');
        this.showstudentsForm = false;
        this.selectquery();
      } else {
        this.message.create('error', res.info);
      }
    }); 
  }
//预约时学员信息查询
  selectshowstudents(){
    
    this.http.post('/curriculum/selectMemberMsg', { mobilePhone: this.mobilePhone }, false).then(res => {
      if(res.code==1000){
          if(res.result.length){
            this.studentInformation = res.result[0];
            this.studentInformation.havacard = this.studentInformation.havacard == 0 ? '体验' : '正式'; 
          }else{
            this.message.create('error', '无学员信息~');
          }
      }else{
        this.message.create('error', res.info); 
      }
    }); 
  }

  details(data){
    this.studentdata = data;
    this.showListdetail = true;
    
  }
  closeListdetail(){
    this.showListdetail = false;    
  }

  //延期弹框
  memberRecord(memberId, studentdata){
    this.showRecord = true;
    this.http.post('/curriculum/memberRecord', { memberId: memberId }, false).then(res => {
      if (res.code == 1000) {
        this.memberdetail = res.result;
        this.memberdetail.courseName = studentdata.name;
        this.memberdetail.currentDate = studentdata.currentDate;
        this.memberdetail.startTime = studentdata.startTime;
        this.memberdetail.endTime = studentdata.endTime;
        if (this.memberdetail.havacard == 0){
          this.memberdetail.havacard = '体验';
        }else{
          this.memberdetail.havacard = '正式';
        }
      } else {
        this.message.create('error', res.info);
      }
    }); 
  }

  closeRecord(){
    this.showRecord = false;
  }
  isRecord(){
    let paramJson: any = JSON.stringify({
      syllabusName: this.memberdetail.courseName,
      currentDate: this.memberdetail.currentDate,
      startDate: this.startDate,
      endDate: this.endDate,
      startTime: this.memberdetail.startTime,
      endTime: this.memberdetail.endTime,
      memberId: this.memberdetail.memberId
    });
    this.http.post('/curriculum/postponedMemberRecord', { paramJson }, false).then(res => {
      if (res.code == 1000) { 
        this.showmodelts = true;
        this.callcurrentDate = res.result.currentDate + ' ' + res.result.startTime + '-'+res.result.endTime;
        this.seletdataList();
        this.nowDate();
      }else{
        this.message.create('error', res.info);
      }
    }); 
  }
  closemodelts(){
    this.showmodelts = false;
    this.showRecord = false;
  }


  //调课
  Adjust(memberId, memberName,item, studentdata){
    this.showAdjust = true;
    this.radioValue = '';
    this.RecordList = [];
    this.datalabelList = [];
    
    this.memberdetailTks = studentdata;
    this.memberdetailTks.item = item;
    this.http.post('/curriculum/selectMsg', { memberId: memberId }, false).then(res => {
      if (res.code == 1000) {
        this.memberdetailTk = res.result.list;
        console.log(this.memberdetailTk);
      } else {
        this.message.create('error', res.info);
      }
    });
  }

  closeAdjust(){
    this.showAdjust = false;   
    this.radioValue = '';

    this.RecordList = [];
    this.datalabelList = [];

    this.RecordList1 = [];
    this.RecordList2 = [];
    this.RecordList3 = [];
    this.RecordList4 = [];
    this.RecordList5 = [];
    this.RecordList6 = [];
    this.RecordList7 = []; 
  }
  isAdjust(){
    if (!this.datalabelList.length){
      this.message.create('error', '请选择课程');
      return false;
    }
    // let paramJson: any = JSON.stringify({
    //   babyNumber: this.memberData.babyNumber,
    //   status: status,
    //   name: this.memberData.name,
    //   parentName: this.memberData.parentName,
    //   cardNumber: this.memberData.cardNumber,
    //   memberId: this.memberData.memberId,
    //   cardCode: this.memberData.cardCode,
    //   mobilePhone: this.memberData.mobilePhone,
    //   list: this.datalabelList

    // });
    let paramJson: any = JSON.stringify({
      babyNumber: this.memberdetailTk.babyNumber,
      name: this.memberdetailTk.name,
      parentName: this.memberdetailTk.parentName,
      cardNumber: this.memberdetailTk.cardNumber,
      memberId: this.memberdetailTks.item.memberId,
      cardCode: this.memberdetailTk.cardCode,
      list: this.datalabelList,
      mobilePhone: this.memberdetailTk.mobilePhone
    });
    let paramJsonDelect:any = JSON.stringify({
      syllabusName: this.memberdetailTks.name,
      memberId: this.memberdetailTks.item.memberId,
      startTime: this.memberdetailTks.startTime,
      endTime: this.memberdetailTks.endTime,
      currentDate: this.memberdetailTks.currentDate
    });                
    this.http.post('/curriculum/adjustDeleteRecord', { paramJson: paramJsonDelect }, false).then(res => {
      if (res.code == 1000) {
        //调课
        this.http.post('/curriculum/adjustmentRecord', { paramJson }, false).then(res => {
                if (res.code == 1000) {
                  this.message.create('success', '调课成功！');
                      this.radioValue = '';
                      this.showAdjust = false;
                      this.RecordList = [];
                      this.datalabelList = [];
                      this.selectquery();
                      this.showListdetail = false;
                      this.RecordList1 = [];
                      this.RecordList2 = [];               
                      this.RecordList3 = [];
                      this.RecordList4 = [];
                      this.RecordList5 = [];
                      this.RecordList6 = [];
                      this.RecordList7 = [];
                    } else {
                  this.message.create('error', res.info);
                }
              });     
      } else {
        this.message.create('error', res.info);
      }
    });     
  }
  //查询课程类别
  selectSyllabusAll(){
    this.http.post('/scheduling/selectSyllabusAll', {  }, false).then(res => {
      if (res.code == 1000) {
        this.SyllabusAllList =  res.result.list;
      } else {
        this.message.create('error', res.info);
      }
    }); 
  }
//办卡选课中课表展示
  selectlabel(){
    this.http.post('/curriculum/selectIdRecord', { syllabusName: this.radioValue }, false).then(res => {
      if (res.code == 1000) {
        this.RecordList = res.result.list;
        this.RecordList1 = [];
        this.RecordList2 = [];
        this.RecordList3 = [];
        this.RecordList4 = [];
        this.RecordList5 = [];
        this.RecordList6 = [];
        this.RecordList7 = [];
        this.RecordList.map( item=>{
          if(item.week=='星期一'){
            this.RecordList1.push(item);
          } else if (item.week == '星期二'){
            this.RecordList2.push(item);
          } else if (item.week == '星期三') {
            this.RecordList3.push(item);
          } else if (item.week == '星期四') {
            this.RecordList4.push(item);
          } else if (item.week == '星期五') {
            this.RecordList5.push(item);
          } else if (item.week == '星期六') {
            this.RecordList6.push(item);
          } else if (item.week == '星期日') {
            this.RecordList7.push(item);
          }
        })
      } else {
        this.message.create('error', res.info);
      }
    })
  }
  //点击会员停卡
  memberStopcard(memberId){
    this.stopcardMemberdetail = {};
    this.showStopcard = true;
    this.http.post('/curriculum/selectMsg', { memberId: memberId }, false).then(res => {
      if (res.code == 1000) {
        this.stopcardMemberdetail = res.result.list;
      } else {
        this.message.create('error', res.info);
      }
    });
  }
//关闭停卡
  closeStopcard(){
    this.showStopcard = false;
  }
//确认停卡
  isStopcard(){
    console.log(this.stopcardMemberdetail);
    if (!this.stopcardMemberdetail.reopenDate){
      this.message.create('error','日期不能为空');
      return false;
    }
    let paramJson: any = JSON.stringify({
      reopenDate: this.format.transform(this.stopcardMemberdetail.reopenDate, 'yyyy-MM-dd'),
      id: this.stopcardMemberdetail.id,
      name: this.stopcardMemberdetail.name
    });
    this.http.post('/memberCard/pauseCard', { paramJson }, false).then(res => {
      if (res.code == 1000) {
        this.message.create('success', '操作成功！');
        this.showStopcard = false;
        this.showListdetail = false;
        this.selectquery();
      } else {
        this.message.create('error', res.info);
      }
    });
  }
  //选择课程
  datalabelChange(){
      
    this.datalabelList = [];
    
    this.RecordList1.map(item=>{
      if (item.id == this.courseNames){
        this.datalabelList.push(item);
      }
    })
    this.RecordList2.map(item => {
      if (item.id == this.courseNames) {
        this.datalabelList.push(item);
      }
    })
    this.RecordList3.map(item => {
      if (item.id == this.courseNames) {
        this.datalabelList.push(item);
      }
    })
    this.RecordList4.map(item => {
      if (item.id == this.courseNames) {
        this.datalabelList.push(item);
      }
    })
    this.RecordList5.map(item => {
      if (item.id == this.courseNames) {
        this.datalabelList.push(item);
      }
    })
    this.RecordList6.map(item => {
      if (item.id == this.courseNames) {
        this.datalabelList.item;
      }
    })
    this.RecordList7.map(item => {
      if (item.id == this.courseNames) {
        this.datalabelList.push(item);
      }
    })                        
  }
  settlement(item){
    let appointmentInfo = {
      id:'',
      memberId:'',
      name:'',
      nick:'',
      sex:'',
      monthAge:'',
      cardCode:'',
      cardId:''
    };
    this.http.post('/curriculum/selectMsg', { memberId: item.memberId }, false).then(res => {
      if (res.code == 1000) {
        appointmentInfo.id = item.reserveId;
        appointmentInfo.memberId = res.result.list.memberId;
        appointmentInfo.name = res.result.list.name;
        appointmentInfo.nick = res.result.list.nick;
        appointmentInfo.sex = item.sex;
        appointmentInfo.monthAge = item.monthAge;
        appointmentInfo.cardId = item.id?item.id:'';
        this.consumption(appointmentInfo);
      } else if(res.code == 1011){
        appointmentInfo.id = item.reserveId;
        appointmentInfo.memberId = item.memberId;
        appointmentInfo.name = item.memberName;
        appointmentInfo.nick = item.nick;
        appointmentInfo.sex = item.sex;
        appointmentInfo.monthAge = item.monthAge;
        appointmentInfo.cardId = item.id ? item.id : '';
        this.consumption(appointmentInfo);
      } else {
        this.message.create('error', res.info);
      }
    });
  }
  /* ------------------- 结算预约 ------------------- */
  
  consumption(appointmentInfo) {
    const drawerRef = this.drawer.create({
      nzTitle: '添加消费',
      nzContent: ConsumptionsComponents,
      nzWidth: 720,
      nzBodyStyle: {
        'padding-bottom': '53px'
      },
      nzContentParams: {
        appointmentInfo
      }
    });

    // drawerRef.afterClose.subscribe(res => res && this.listPage.eaTable._request());
    drawerRef.afterClose.subscribe(res =>{
      this.showListdetail = false;
      this.nowDate();
    });
  }

  /*---------------取消预约-----------------------*/
  removeRecord(memberId,id){
    this.removeRecordData= {
      memberId,
      id
    }
    this.passwindow = true;
  }
  noPasswindow(){
    this.passwindow = false;
  }
  isPasswindow(){
    this.http.post('/curriculum/deleteSingle', { memberId: this.removeRecordData.memberId, reserveId: this.removeRecordData.id }, false).then(res => {
        if(res.code == 1000){
          this.message.create('success', '取消成功！');
          this.passwindow = false;
          this.nowDate();
          this.showListdetail = false;
        }else{
          this.message.create('error', res.info);
        }
    });
  }
}
