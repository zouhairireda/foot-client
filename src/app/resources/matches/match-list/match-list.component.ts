import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/common/services/match.service';
import { Match } from 'src/app/common/interfaces/Match';

@Component({
    selector: 'app-match-list',
    templateUrl: './match-list.component.html',
    styleUrls: ['./match-list.component.scss'],
    providers: [MatchService]
})

export class MatchListComponent implements OnInit {

    matches: Match[]

    constructor(private matchService: MatchService) { }

    ngOnInit() {
        this.matchService.list().subscribe((res: Match[]) => {
            this.matches = res;
        });
    }
}
