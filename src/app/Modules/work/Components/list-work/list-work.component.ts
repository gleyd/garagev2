import { Component, OnInit, Input } from '@angular/core';
import { Work } from '../../Models/work';
import { WorkService } from '../../Services/work.service';

@Component({
  selector: 'app-list-work',
  templateUrl: './list-work.component.html',
  styleUrls: ['./list-work.component.css']
})
export class ListWorkComponent implements OnInit {

  @Input() work: Work;
  works: Array<Work>;
  constructor(WorkService: WorkService) {

    this.works = WorkService.getAll();


  }
  ngOnInit() {
  }

}
