import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FeedType } from 'src/app/models/feed-type.enum';
import { environment } from '../../../environments/environment';
import { Goal } from '../../models/goal.model';

@Injectable({
    providedIn: 'root',
})
export class GoalService {
    private apiUrl = `${environment.apiUrl}/goal`;

    constructor(private http: HttpClient) {}

    /**
     * TODO: document
     * @param id
     */
    get(id: string): Observable<Goal> {
        return this.http.get<Goal>(`${this.apiUrl}/${id}`);
    }

    /**
     * TODO: document
     * @param feedType
     * @param fetchCount
     */
    getFeed(feedType: FeedType, fetchCount): Observable<Goal[]> {
        // TODO: implement
        return of([{}]);
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
