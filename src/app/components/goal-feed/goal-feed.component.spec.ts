import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FeedType } from 'src/app/models/feed-type.enum';
import { Goal } from 'src/app/models/goal.model';
import { GoalService } from 'src/app/services/api/goal.service';
import { Util } from 'src/app/utilities/util';
import { GoalFeedComponent } from './goal-feed.component';

describe('GoalFeedComponent', () => {
    let component: GoalFeedComponent;
    let fixture: ComponentFixture<GoalFeedComponent>;
    let goalService: GoalService;

    // test doubles
    const testGoals: Goal[] = [{}];

    const goalServiceSpy = jasmine.createSpyObj('GoalService', ['getFeed']);
    goalServiceSpy.getFeed.and.returnValue(of([{}]));

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GoalFeedComponent],
            providers: [{ provide: GoalService, useValue: goalServiceSpy }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GoalFeedComponent);
        component = fixture.componentInstance;
        goalService = TestBed.get(GoalService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        Util.getEnumValueList(FeedType).forEach(feedType => {
            it(`should load goals for feed of type "${feedType}"`, () => {
                component.feedType = FeedType[feedType];

                component.ngOnInit();

                expect(goalService.getFeed).toHaveBeenCalledWith(
                    FeedType[feedType],
                    component.fetchCount
                );
                expect(component.goals).toEqual(testGoals);
            });
        });

        const testFetchCounts = [1, 10, 50];
        testFetchCounts.forEach(count => {
            it(`should load goals for feed with fetchCount=${count}`, () => {
                component.fetchCount = count;

                component.ngOnInit();

                expect(goalService.getFeed).toHaveBeenCalledWith(
                    component.feedType,
                    count
                );
            });
        });
    });
});
