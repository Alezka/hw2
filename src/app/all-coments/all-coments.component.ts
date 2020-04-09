import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComentModel} from '../../models/ComentModel';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-coments.component.html',
  styleUrls: ['./all-coments.component.css']
})
export class AllComentsComponent implements OnInit {
  coments: ComentModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.coments = this.activatedRoute.snapshot.data.allComent;
  }

  ngOnInit(): void {
  }

}
