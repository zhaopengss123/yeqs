import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ea-slide',
  templateUrl: './slide.component.html',
<<<<<<< HEAD
  styleUrls: ['./slide.component.scss']
=======
  styleUrls: ['./slide.component.less']
>>>>>>> upgrade
})
export class SlideComponent {


  @Input() width    : number = 960;

  @Input() closeLink: string; 

  constructor() { }

}
