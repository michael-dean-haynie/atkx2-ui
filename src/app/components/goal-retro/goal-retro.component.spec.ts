import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { GoalRetroComponent } from './goal-retro.component';

fdescribe('GoalRetroComponent', () => {
    let component: GoalRetroComponent;
    let fixture: ComponentFixture<GoalRetroComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [GoalRetroComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GoalRetroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('setCriteriaWasMet', () => {
        it('should set form control "criteriaWasMet" to true', () => {
            component.goalRetroForm.get('criteriaWasMet').setValue(null);

            component.setCriteriaWasMet(true);

            expect(component.goalRetroForm.get('criteriaWasMet').value).toBe(
                true
            );
        });

        it('should set form control "criteriaWasMet" to false', () => {
            component.goalRetroForm.get('criteriaWasMet').setValue(null);

            component.setCriteriaWasMet(false);

            expect(component.goalRetroForm.get('criteriaWasMet').value).toBe(
                false
            );
        });
    });

    describe('setGoalWasEffective', () => {
        it('should set form control "goalWasEffective" to true', () => {
            component.goalRetroForm.get('goalWasEffective').setValue(null);

            component.setGoalWasEffective(true);

            expect(component.goalRetroForm.get('goalWasEffective').value).toBe(
                true
            );
        });

        it('should set form control "goalWasEffective" to false', () => {
            component.goalRetroForm.get('goalWasEffective').setValue(null);

            component.setGoalWasEffective(false);

            expect(component.goalRetroForm.get('goalWasEffective').value).toBe(
                false
            );
        });
    });

    /**
     * DOM Tests
     */

    it('should update form control "criteriaNotMetReason" with input', () => {
        const testInput = 'cadenza';
        const compElem: HTMLElement = fixture.nativeElement;
        const inputElem: HTMLInputElement = compElem.querySelector(
            '.form__criteriaNotMetReason'
        );

        // initial value is empty string
        expect(component.goalRetroForm.get('criteriaNotMetReason').value).toBe(
            ''
        );

        inputElem.value = testInput;
        inputElem.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        // value after input value changes
        expect(component.goalRetroForm.get('criteriaNotMetReason').value).toBe(
            testInput
        );
    });
});
