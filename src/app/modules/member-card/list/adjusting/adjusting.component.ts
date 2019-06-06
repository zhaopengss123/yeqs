import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-adjusting',
  templateUrl: './adjusting.component.html',
  styleUrls: ['./adjusting.component.scss']
})
export class AdjustingComponent implements OnInit {
  id: number;
  current: number = 1;
  followRecordGroup: FormGroup;
  conditionList: any[] = [];
  dateRange: any = [];
  scourList: any[];
  memberDetail: any;
  isLoadingOne: boolean;
  memberData: any = {};
  memberdetailTk: any = {};
  radioName: string;
  SyllabusAllList: any[];
  RecordList: any[] = [];
  dateList: any[];
  RecordList1: any[];
  RecordList2: any[];
  RecordList3: any[];
  RecordList4: any[];
  RecordList5: any[];
  RecordList6: any[];
  RecordList7: any[];
  datalabelList: any[];
  startDate: any = '';
  Tuesday: any = '';
  Wednesday: any = '';
  Thursday: any = '';
  Friday: any = '';
  Saturday: any = '';
  endDate: any = '';
  dateIndex: number;
  isBtnDisVled: boolean = true;
  nowstartDate: any;
  nowendDate: any;
  listArr: any[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private message: NzMessageService,
    private http: HttpService,
    private fb: FormBuilder = new FormBuilder(),
    private format: DatePipe
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.http.post('/scheduling/selectCondition', {}, false).then(res => { this.conditionList = res.result.list });
    this.http.post('/memberCard/getMemberCards', { memberId: this.id }, false).then(res => { this.followRecordGroup.patchValue({ memberName: res.result[0].memberName }); });
    this.http.post('/curriculum/selectMsg', { memberId: this.id }, false).then(res => { this.memberdetailTk = res.result.list; });
    this.http.post('/scheduling/selectSyllabusAll', {}, false).then(res => { this.SyllabusAllList = res.result.list; });
    this.http.post('/intelligent/selectScour', {}, false).then(res => { this.dateList = res.result.list; });
    this.http.post('/intelligent/selectScour', {}, false).then(res => {
      res.result.list.map(item => {
        item.label = item.startTime + '-' + item.endTime;
      })

      this.scourList = res.result.list
    });
    this.nowDate();
  }
  ngOnInit() {
    this.followRecordGroup = this.fb.group({
      memberName: [],
      syllabusName: [],
      startDate: [],
      endDate: [],
      week: [],
      scourId: [],
      date: [],
      flag: [false]
      // followType: [, [Validators.required]],
      // staffId: [, [Validators.required]],
      // memberStatusId: [],
      // nextFollowTime: [],
      // status: []
    });
  }
  dateChange(e) {
    let [startDate, endDate] = [this.format.transform(this.dateRange[0], 'yyyy-MM-dd'), this.format.transform(this.dateRange[1], 'yyyy-MM-dd')];
    this.followRecordGroup.patchValue({ startDate });
    this.followRecordGroup.patchValue({ endDate });
  }
  firstNext() {
    this.isLoadingOne = true;
    this.http.post('/curriculum/readyClass', { paramJson: JSON.stringify(this.followRecordGroup.value) }, false).then(res => {
      this.isLoadingOne = false;
      if (res.code == 1000) {

      } else {
        this.message.warning(res.info);
      }
    });
  }
  nowDate() {
    this.dateIndex = 0;
    this.datefun(0);
  };
  nextDate() {
    this.dateIndex++;
    this.datefun(this.dateIndex * 7);
  };
  prveDate() {
    if (this.dateIndex > 0) {
      this.dateIndex--;
      this.datefun(this.dateIndex * 7);
    }
  };
  datefun(index) {
    if (this.dateIndex == 0) {
      this.isBtnDisVled = true;
    } else {
      this.isBtnDisVled = false;
    }
    let now: any = new Date();
    let nowDayOfWeek = now.getDay();
    nowDayOfWeek = nowDayOfWeek == 0 ? 7 : nowDayOfWeek;
    this.startDate = this.showWeekFirstDay(1 - nowDayOfWeek + index);
    this.Tuesday = this.showWeekFirstDay(2 - nowDayOfWeek + index);;
    this.Wednesday = this.showWeekFirstDay(3 - nowDayOfWeek + index);;
    this.Thursday = this.showWeekFirstDay(4 - nowDayOfWeek + index);;
    this.Friday = this.showWeekFirstDay(5 - nowDayOfWeek + index);;
    this.Saturday = this.showWeekFirstDay(6 - nowDayOfWeek + index);;
    this.endDate = this.showWeekFirstDay(7 - nowDayOfWeek + index);
    if (!this.nowstartDate) {
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



  //选择课程
  datalabelChange(data) {
    //data.syllabusName = data.name;
    if (data.checked) {
      this.datalabelList.push(data);
      this.listArr.push(data);
    } else {
      this.datalabelList.map((item, index) => {
        if (item.id == data.id) {
          this.datalabelList.splice(index, 1);
        }
      })
      this.listArr.map((item, index) => {
        if (item.id == data.id) {
          this.listArr.splice(index, 1);
        }
      })
    }
    console.log(this.listArr);
  }
  // 查询课程
  selectlabel(data) {
    console.log(1111);
    if (data.checked) {
      this.http.post('/curriculum/selectIdRecord', { syllabusName: data.name, startDate: this.startDate, endDate: this.endDate }, false).then(res => {
        if (res.code == 1000) {
          let arr = this.RecordList.concat(res.result.list);
          this.RecordList = res.result.list;
          this.datalabelList = [];
          this.RecordList1 = [];
          this.RecordList2 = [];
          this.RecordList3 = [];
          this.RecordList4 = [];
          this.RecordList5 = [];
          this.RecordList6 = [];
          this.RecordList7 = [];
          this.RecordList.map(item => {
            if (item.week == '星期一') {
              this.RecordList1.push(item);
            } else if (item.week == '星期二') {
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
      });
    } else {
      // let arr = this.RecordList.concat(res.result.list);
      // let arr = JSON.parse(JSON.stringify(this.RecordList));
      // arr.map((item,index)=>{
      //   if(item.name == data.name){
      //       arr.splice(index,1);
      //   }
      // })
      this.listArr.map((item,index)=>{
        console.log(index);
          if(item.name == data.name){
            this.listArr.splice(index, 1);
          }

      })
    }
  }

}


// paramJson: {
//   "babyNumber": 1, "name": "新客户1", "parentName": "妈妈", "memberId": 1560514, "cardCode": "18655441789", "mobilePhone": "18655441789", 
//   "list": [{
//     arranging: 10, //排课次数
//     name: '海马二阶',
//     reserveList: [{
//       scourId: 时间      
//       currentDate: '2018-08-08' 
//       employeeName  上课老师 
//       week  星期
//     }, {
//       scourId: 时间      currentDate: '2018-08-08' employeeName  上课老师   week  星期
//     }]   arranging: 10, 排课次数
//   name: '海马二阶',
//     reserveList: [{
//       scourId: 时间      currentDate: '2018-08-08' employeeName  上课老师   week  星期
//     }, {
//       scourId: 时间      currentDate: '2018-08-08' employeeName  上课老师   week  星期
//     }]

//   }, {
//   }]
// }