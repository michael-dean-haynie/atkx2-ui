import { Component, Input, OnInit } from '@angular/core';
import { FeedType } from 'src/app/models/feed-type.enum';
import { Goal } from 'src/app/models/goal.model';
import { GoalService } from 'src/app/services/api/goal.service';

@Component({
    selector: 'app-goal-feed',
    templateUrl: './goal-feed.component.html',
    styleUrls: ['./goal-feed.component.scss'],
})
export class GoalFeedComponent implements OnInit {
    constructor(private goalService: GoalService) {}

    @Input() feedType: FeedType = FeedType.ReadyForRetro;
    @Input() fetchCount = 10;

    goals: Goal[];

    ngOnInit() {
        this.fetchGoals(this.feedType, this.fetchCount);
    }

    /**
     * TODO: Document
     */
    private fetchGoals(feedType: FeedType, fetchCount: number): void {
        this.goalService.getFeed(feedType, fetchCount).subscribe(
            goals => {
                this.goals = goals;
            },
            error => {
                // TODO: handle error
            }
        );
    }
}
