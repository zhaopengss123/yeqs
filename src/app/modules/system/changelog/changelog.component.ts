import { HttpService } from 'src/app/ng-relax/services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {

  changelog: any = []

  loading: boolean;

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.loading = true;
<<<<<<< HEAD
    this.http.post('/version/getVersionList', {}, false).then(res => {
=======
    this.http.post('/version/getVersionList').then(res => {
>>>>>>> upgrade
      res.code == 1000 && (this.changelog = res.result.list);
      this.loading = false;
    });
  }

}
