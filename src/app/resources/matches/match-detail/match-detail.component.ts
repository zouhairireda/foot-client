import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/common/services/match.service';
import { Match } from 'src/app/common/interfaces/Match';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss'],
  providers: [MatchService]
})
export class MatchDetailComponent implements OnInit {

  match: Match;

  constructor(private matchService: MatchService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id : number = this.activatedRoute.snapshot.params.id;
    this.matchService.show(id).subscribe((res: Match) => {
      this.match = res;
    });
  }

}
