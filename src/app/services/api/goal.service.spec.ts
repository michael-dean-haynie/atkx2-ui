import { HttpClient } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GoalService } from './goal.service';

describe('GoalService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        })
    );

    it('should be created', () => {
        const service: GoalService = TestBed.get(GoalService);
        expect(service).toBeTruthy();
    });
});
