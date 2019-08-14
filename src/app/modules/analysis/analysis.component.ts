
<<<<<<< HEAD
import { environment } from './../../../environments/environment';
=======
>>>>>>> upgrade
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { DatePipe } from '@angular/common';
<<<<<<< HEAD
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
=======
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less']
>>>>>>> upgrade
})
export class AnalysisComponent implements OnInit {
  domain = environment.domain;
  nickName = new FormControl('tom');
  formModel: FormGroup;
  selectindex: any;
  AllList: any;
  findList: any;
  findindex: any;
  successRate: any = false;
  menu: any;
  pageId: string = "14";
  formList = {};
  dataSet = [];
  ListHeader: any;
  ListContent: any;
  formData: any = {
    "datePickerList": [],
    "selectList": [],
    "textFieldList": [],
    "writeableSelectList": []
  };
  constructor(

    private http: HttpService,
    private message: NzMessageService,
    private format: DatePipe,


  ) {

    this.getform(this.pageId);
    this.formModel = new FormGroup({

    });
  }
  changefind() {
    let index = this.selectindex - 1;
    this.findList = this.menu[index].children;
  }
  subData() {
    let params = JSON.parse(JSON.stringify(this.formModel.value));

    if (this.formData.datePickerList) {
      this.formData.datePickerList.map(res => {
        params[res.fieldName] = this.format.transform(params[res.fieldName], 'yyyy-MM-dd');
      })
    }

    params.reportId = this.pageId;
    for (let i in params) {
      if (params[i] == null || params[i] == '') {
        delete params[i];
      }
    }
<<<<<<< HEAD
    if (!this.successRate){
=======
    if (!this.successRate) {
>>>>>>> upgrade
      this.http.post('/report/query', { paramJson: JSON.stringify(params) }, false).then(res => {
        this.ListHeader = res.result.header;
        this.ListContent = res.result.content;
      });
<<<<<<< HEAD
    }else{
      if (!params.startDate || !params.endDate){
=======
    } else {
      if (!params.startDate || !params.endDate) {
>>>>>>> upgrade
        this.ListHeader = [];
        this.ListContent = [];
        return false;
      }
      this.http.post('/cardSuccessRate/query', { paramJson: JSON.stringify(params) }, false).then(res => {
        this.ListHeader = res.result.header;
        this.ListContent = res.result.content;
        this.ListHeader = [];
        this.ListContent = [];
<<<<<<< HEAD
        this.ListHeader.push(res.result.header['MONTH']);       
=======
        this.ListHeader.push(res.result.header['MONTH']);
>>>>>>> upgrade
        this.ListHeader.push(res.result.header['CARD_TOTAL']);
        this.ListHeader.push(res.result.header['COME_TOTAL']);
        this.ListHeader.push(res.result.header['EXP']);
        this.ListHeader.push(res.result.header['INCOME_TOTAL']);
        this.ListHeader.push(res.result.header['RENEWAL']);
        this.ListHeader.push(res.result.header['SUCCESS_RATE']);
        this.ListHeader.push(res.result.header['TEL']);
        this.ListHeader.push(res.result.header['TOTAL']);
<<<<<<< HEAD
        this.ListHeader.push(res.result.header['UNIT_PRICE']);    

        res.result.content.map(item=>{
          let arr = [];
            arr.push(item.MONTH);
            arr.push(item.CARD_TOTAL);
            arr.push(item.COME_TOTAL);
            arr.push(item.EXP);
            arr.push(item.INCOME_TOTAL);
            arr.push(item.RENEWAL);
            arr.push(item.SUCCESS_RATE);
            arr.push(item.TEL);
            arr.push(item.TOTAL);
            arr.push(item.UNIT_PRICE); 
        
          this.ListContent.push(arr);
        })
      });      
    }
  }
  exports(){
=======
        this.ListHeader.push(res.result.header['UNIT_PRICE']);

        res.result.content.map(item => {
          let arr = [];
          arr.push(item.MONTH);
          arr.push(item.CARD_TOTAL);
          arr.push(item.COME_TOTAL);
          arr.push(item.EXP);
          arr.push(item.INCOME_TOTAL);
          arr.push(item.RENEWAL);
          arr.push(item.SUCCESS_RATE);
          arr.push(item.TEL);
          arr.push(item.TOTAL);
          arr.push(item.UNIT_PRICE);

          this.ListContent.push(arr);
        })
      });
    }
  }
  exports() {
>>>>>>> upgrade
    let params = JSON.parse(JSON.stringify(this.formModel.value));
    if (this.formData.datePickerList) {
      this.formData.datePickerList.map(res => {
        params[res.fieldName] = this.format.transform(params[res.fieldName], 'yyyy-MM-dd');
      })
    }

    params.reportId = this.pageId;
    for (let i in params) {
      if (params[i] == null || params[i] == '') {
        delete params[i];
      }
    }
<<<<<<< HEAD
    window.open( this.domain + '/report/export?paramJson=' + JSON.stringify(params) );
  }
  elder(index) {
    let reportId = index == '0' ? '14' : (index == '1' ? '2' : (index == '2' ? '3' : (index == '3' ? '8' : (index == '4' ? '42' : '88' ))));
=======
    window.open(this.domain + '/report/export?paramJson=' + JSON.stringify(params));
  }
  elder(index) {
    let reportId = index == '0' ? '14' : (index == '1' ? '2' : (index == '2' ? '3' : (index == '3' ? '8' : (index == '4' ? '42' : '88'))));
>>>>>>> upgrade
    this.pageId = reportId;
    this.getform(reportId);
  }
  getform(reportId) {

<<<<<<< HEAD
    if (reportId != 88){
    this.successRate = false;  
    this.http.post('/report/buildQueryPage', { paramJson: JSON.stringify({ reportId: reportId }) }, false).then(res => {
      this.formData = res.result;
      this.ListHeader = [];
      this.ListContent = [];
      if (this.formData.selectList) {

        this.formData.selectList.map((item, index) => {
          if (item.dataSource) {
            let dataSource = JSON.stringify(item.dataSource);
            dataSource = dataSource.substring(1, dataSource.length - 1);
            item.dataSource = dataSource.split(',');
            item.dataSource.map((items, indexs) => {
              let str = items.split(':')[0];
              let str1 = items.split(':')[1];
              str = str.substring(1, str.length - 1);
              str1 = str1.substring(1, str1.length - 1);
              let jsons:any = {};
              jsons.key = str;
              jsons.name = str1;
              this.formData.selectList[index].dataSource[indexs] = jsons;
            })
          }
        })
      }
   
   
      if (this.formData.datePickerList) {
        this.formData.datePickerList.map(res => {
          this.formModel.addControl(res.fieldName, new FormControl(new Date()))
        })
      }

      if (this.formData.selectList) {
        this.formData.selectList.map(res => {
          this.formModel.addControl(res.fieldName, new FormControl())
        })
      }
      if (this.formData.textFieldList) {
        this.formData.textFieldList.map(res => {
          this.formModel.addControl(res.fieldName, new FormControl())
        })
      }
    });
    }else{
      this.successRate = true; 
      this.formData = {};
      this.formData.datePickerList = [{ "chineseName": "起始日期", "fieldName": "startDate", "null": false, "pattern": "yyyy-MM-dd" }, 
      { "chineseName": "终止日期", "fieldName": "endDate", "null": false, "pattern": "yyyy-MM-dd" }];
        this.formData.datePickerList.map(res => {
          this.formModel.addControl(res.fieldName, new FormControl())
        })
    
=======
    if (reportId != 88) {
      this.successRate = false;
      this.http.post('/report/buildQueryPage', { paramJson: JSON.stringify({ reportId: reportId }) }, false).then(res => {
        this.formData = res.result;
        this.ListHeader = [];
        this.ListContent = [];
        if (this.formData.selectList) {

          this.formData.selectList.map((item, index) => {
            if (item.dataSource) {
              let dataSource = JSON.stringify(item.dataSource);
              dataSource = dataSource.substring(1, dataSource.length - 1);
              item.dataSource = dataSource.split(',');
              item.dataSource.map((items, indexs) => {
                let str = items.split(':')[0];
                let str1 = items.split(':')[1];
                str = str.substring(1, str.length - 1);
                str1 = str1.substring(1, str1.length - 1);
                let jsons: any = {};
                jsons.key = str;
                jsons.name = str1;
                this.formData.selectList[index].dataSource[indexs] = jsons;
              })
            }
          })
        }


        if (this.formData.datePickerList) {
          this.formData.datePickerList.map(res => {
            this.formModel.addControl(res.fieldName, new FormControl(new Date()))
          })
        }

        if (this.formData.selectList) {
          this.formData.selectList.map(res => {
            this.formModel.addControl(res.fieldName, new FormControl())
          })
        }
        if (this.formData.textFieldList) {
          this.formData.textFieldList.map(res => {
            this.formModel.addControl(res.fieldName, new FormControl())
          })
        }
      });
    } else {
      this.successRate = true;
      this.formData = {};
      this.formData.datePickerList = [{ "chineseName": "起始日期", "fieldName": "startDate", "null": false, "pattern": "yyyy-MM-dd" },
      { "chineseName": "终止日期", "fieldName": "endDate", "null": false, "pattern": "yyyy-MM-dd" }];
      this.formData.datePickerList.map(res => {
        this.formModel.addControl(res.fieldName, new FormControl())
      })

>>>>>>> upgrade
    }
  }
  ngOnInit() {

  }

}
