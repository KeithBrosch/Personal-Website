import { Component, OnInit } from '@angular/core';
import { faHome, faFileSignature, faCode, faMailBulk} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  faHome = faHome;
  faFileSignature = faFileSignature;
  faCode = faCode;
  faMailBulk = faMailBulk;

  constructor() { }

  ngOnInit() {
  }

}
