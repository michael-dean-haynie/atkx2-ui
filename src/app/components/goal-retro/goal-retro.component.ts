import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-goal-retro',
    templateUrl: './goal-retro.component.html',
    styleUrls: ['./goal-retro.component.scss'],
})
export class GoalRetroComponent implements OnInit {
    constructor(private fb: FormBuilder) {}

    goalRetroForm = this.fb.group({
        criteriaWasMet: [null],
        criteriaNotMetReason: [''],
        goalWasEffective: [null],
        retroComments: [''],
    });

    ngOnInit() {}

    /**
     * Set the value of the form control "criteriaWasMet"
     * @param criteriaWasMet the boolean vaule being set
     */
    setCriteriaWasMet(criteriaWasMet: boolean): void {
        this.goalRetroForm.get('criteriaWasMet').setValue(criteriaWasMet);
    }

    /**
     * Set the value of the form control "goalWasEffective"
     * @param goalWasEffective the boolean vaule being set
     */
    setGoalWasEffective(goalWasEffective: boolean): void {
        this.goalRetroForm.get('goalWasEffective').setValue(goalWasEffective);
    }
}
