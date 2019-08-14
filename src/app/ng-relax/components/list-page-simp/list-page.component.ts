import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { QueryNode, QueryComponent } from '../query/query.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'ea-list-page-simp',
  templateUrl: './list-page.component.html',
<<<<<<< HEAD
  styleUrls: ['./list-page.component.scss']
=======
  styleUrls: ['./list-page.component.less']
>>>>>>> upgrade
})
export class ListPageSimpComponent implements OnInit {

  @ViewChild('EaQuery') eaQuery: QueryComponent;
  @ViewChild('EaTable') eaTable: TableComponent;

  @Input() type: 'default' | 'simpify' = 'default';

  @Input('queryTitle') title: string;

  @Input() queryNode: QueryNode[] = [];

  @Input() tableThead: any[] = [];

  @Input() url: string;

  @Input() paramsDefault: any = {};

  @Input() paramsInit: any = {};

<<<<<<< HEAD
  @Input() isParamJson: boolean = true;

=======
>>>>>>> upgrade
  @Input() checkedItems: any[];

  @Input() checkedKey: string = 'id';

  @Input() checked: boolean;

  @Input() isRadio: boolean = false;

  @Input() allowSpace: boolean = true;

  @Input() EaTableTbodyTr: TemplateRef<void>;

  @Input() EaTableTbodyExpand: TemplateRef<void>;
  
  private _EaBtns: TemplateRef<void>;
  @Input()
  set EaBtns(value: TemplateRef<void>) {
    this._EaBtns = value;
  }
  get EaBtns(): TemplateRef<void> {
    return this._EaBtns;
  }

<<<<<<< HEAD
=======
  @Output() dataChange: EventEmitter<any> = new EventEmitter();

>>>>>>> upgrade
  @Output('requestReady') requestComplate: EventEmitter<any> = new EventEmitter();
  requestReady(e) {
    this.requestComplate.emit(e);
  }

  @Output() checkedItemsChange: EventEmitter<any[]> = new EventEmitter();
  checkedChange(e) {
    this.checkedItemsChange.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
