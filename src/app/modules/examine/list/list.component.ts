
import { NzMessageService } from 'ng-zorro-antd';
import { HttpService } from './../../../ng-relax/services/http.service';
import { QueryComponent } from './../../../ng-relax/components/query/query.component';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { QueryNode } from 'src/app/ng-relax/components/query/query.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements AfterViewInit {

  @ViewChild('eaQuery') eaQuery: QueryComponent

  queryNode: QueryNode[] = [
    {
      label: '时间',
      type: 'datepicker',
      key: 'startTime'
    },
    {
      label: '教练',
      type: 'select',
      key: 'employeeId',
      optionKey: { label: 'employeeName', value: 'employeeId' },
      optionsUrl: '/scheduling/selectSchedulingAll'
    },

    {
      label: '事件类型',
      type: 'select',
      key: 'type',
      options: [{ name: '身高体重', id: 0 }, { name: '视频', id: 1 },{ name: '图片', id: 2 },{ name: '服务记录', id: 3 },{ name: '月报', id: 4 }],
    }
  ]

  loading: boolean;

  dataSet: any[] = [];

  checkAuth: number;

  constructor(
    private http: HttpService,
    private message: NzMessageService
  ) {
    this.query();
  }

  ngOnInit() { }

  ngAfterViewInit() {
    // this.eaQuery._queryForm.get('classId').valueChanges.subscribe(classId => {
    //   if (classId) {
    //     this.http.post('/message/listStuByClassId', { classId }, false).then(res => {
    //       this.eaQuery.node.map(control => {
    //         control.key == 'studentId' && (control.options = res.data.list);
    //       })
    //     })
    //   } else {
    //     this.eaQuery.node.map(control => control.key == 'studentId' && (control.options = []));
    //   }
    //   this.eaQuery._queryForm.patchValue({ studentId: null });
    // });
  }



  queryParams: any = {
    pageNo: 1,
    totalCount: 0
  };
  loadData(pi: number): void {
    this.queryParams.pageNo = pi;
    this.query();
  }
  querySubmit(params) {
    this.queryParams = Object.assign({ pageNo: 1, totalCount: this.queryParams.totalCount }, params);
    this.query();
  }
  query() {
    return false;
    this.loading = true;
    this.http.post('/memberGrowthRecord/list', { paramJson: JSON.stringify(Object.assign(this.queryParams, { auditStatus: 1})) }, false).then(res => {
      this.loading = false;
      //this.checkAuth = res.data.checkAuth;
      this.queryParams.totalCount = res.data.totalCount;
      res.data.list.map(item => {
        try {
          item.appContent = JSON.parse(item.appContent);
          item.appContent.content = item.appContent.content.split('|~!|').join('<i>|</i>');
        } catch (error) {
          item.appContent = { content: '', videoUrl: '', imgUrlList: [] };
        }
        return item;
      });
      this.dataSet = res.data.list;
    })
  }

  showEventList: boolean;

  showExamine: boolean;
  operExamine() {
    this.showExamine = true;
    this.dataSet.map(res => res.checked = false);
  }


  previewUrl(url) {
    window.open(url)
  }

  batchStatus(auditStatus) {
    let ids = [];
    this.dataSet.map(res => res.checked && ids.push(res.id));
    if (ids.length) {
      this.http.post('/memberGrowthRecord/modify', {
        paramJson: JSON.stringify({
          ids: ids.join(','),
          deleteOrUpdate: '1',
          auditStatus
        })
      }).then(res => {
        this.showExamine = false;
        this.query();
      });
    } else {
      this.message.warning('请选择需要审核的数据');
    }
  }

}
