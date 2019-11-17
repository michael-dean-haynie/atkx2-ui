import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Goal } from 'src/app/models/goal.model';
import { GoalService } from 'src/app/services/api/goal.service';
import { GoalRetroComponent } from './goal-retro.component';

describe('GoalRetroComponent', () => {
    let component: GoalRetroComponent;
    let fixture: ComponentFixture<GoalRetroComponent>;
    let goalService: GoalService;

    // test doubles
    const testGoal: Goal = {};
    testGoal.title = 'title';

    const goalServiceSpy = jasmine.createSpyObj('GoalService', ['get', 'put']);
    goalServiceSpy.get.and.returnValue(of(testGoal));
    goalServiceSpy.put.and.returnValue(of(true));

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [GoalRetroComponent],
            providers: [{ provide: GoalService, useValue: goalServiceSpy }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GoalRetroComponent);
        component = fixture.componentInstance;
        goalService = TestBed.get(GoalService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('should set goal using goalId and service', () => {
            const testGoalId = 'testGoalId';
            component.goalId = testGoalId;

            component.ngOnInit();

            expect(goalService.get).toHaveBeenCalledWith(testGoalId);
            expect(component.goal).toEqual(testGoal);
        });
    });

    describe('setCriteriaWasMet', () => {
        it('should set form control "criteriaWasMet" to true', () => {
            component.form.get('criteriaWasMet').setValue(null);

            component.setCriteriaWasMet(true);

            expect(component.form.get('criteriaWasMet').value).toBe(true);
        });

        it('should set form control "criteriaWasMet" to false', () => {
            component.form.get('criteriaWasMet').setValue(null);

            component.setCriteriaWasMet(false);

            expect(component.form.get('criteriaWasMet').value).toBe(false);
        });
    });

    describe('setGoalWasEffective', () => {
        it('should set form control "goalWasEffective" to true', () => {
            component.form.get('goalWasEffective').setValue(null);

            component.setGoalWasEffective(true);

            expect(component.form.get('goalWasEffective').value).toBe(true);
        });

        it('should set form control "goalWasEffective" to false', () => {
            component.form.get('goalWasEffective').setValue(null);

            component.setGoalWasEffective(false);

            expect(component.form.get('goalWasEffective').value).toBe(false);
        });
    });

    describe('submitForm', () => {
        it('should mark retro complete and update via service', () => {
            const goalFromApi: Goal = {};
            component.goal = goalFromApi;

            const expGoal: Goal = {
                ...goalFromApi,
                criteriaWasMet: true,
                criteriaNotMetReasons: 'reasons',
                goalWasEffective: true,
                retroComments: 'comments',
                retroComplete: true,
            };

            component.form.get('criteriaWasMet').setValue(true);
            component.form.get('criteriaNotMetReasons').setValue('reasons');
            component.form.get('goalWasEffective').setValue(true);
            component.form.get('retroComments').setValue('comments');

            component.submitForm();

            expect(goalService.put).toHaveBeenCalledWith(expGoal);
        });
    });

    /**
     * DOM Tests
     */

    it('should update form control "criteriaNotMetReasons" with input', () => {
        fixture.detectChanges();

        const testInput = 'test input';
        const compElem: HTMLElement = fixture.nativeElement;
        const inputElem: HTMLInputElement = compElem.querySelector(
            '.form__criteriaNotMetReasons'
        );

        // initial value is empty string
        expect(component.form.get('criteriaNotMetReasons').value).toBe('');

        inputElem.value = testInput;
        inputElem.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        // value after input value changes
        expect(component.form.get('criteriaNotMetReasons').value).toBe(
            testInput
        );
    });
});
