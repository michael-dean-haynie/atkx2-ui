import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FeedType } from 'src/app/models/feed-type.enum';
import { Goal } from '../../models/goal.model';

@Injectable({
    providedIn: 'root',
})
export class GoalService {
    constructor(private http: HttpClient) {}

    /**
     * TODO: document
     * @param id
     */
    get(id: string): Observable<Goal> {
        // TODO: Implement
        return of({} as Goal);
    }

    /**
     * TODO: document
     * @param feedType
     * @param fetchCount
     */
    getFeed(feedType: FeedType, fetchCount): Observable<Goal[]> {
        // TODO: implement
        return of([
            { title: 'title1' },
            { title: 'title2' },
            { title: 'title3' },
            { title: 'title4' },
            { title: 'title5' },
            { title: 'title6' },
            { title: 'title7' },
            { title: 'title8' },
            { title: 'title9' },
            { title: 'title10' },
        ]);
    }

    /**
     * TODO: document
     * @param goal
     */
    put(goal: Goal): Observable<boolean> {
        // TODO: implement
        return of(true);
    }
}
