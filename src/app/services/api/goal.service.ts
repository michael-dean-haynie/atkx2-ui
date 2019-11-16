import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
     * @param goal
     */
    put(goal: Goal): Observable<boolean> {
        // TODO: implement
        return of(true);
    }
}
