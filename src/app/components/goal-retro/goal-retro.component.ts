import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Goal } from 'src/app/models/goal.model';
import { GoalService } from 'src/app/services/api/goal.service';

@Component({
    selector: 'app-goal-retro',
    templateUrl: './goal-retro.component.html',
    styleUrls: ['./goal-retro.component.scss'],
})
export class GoalRetroComponent implements OnInit {
    constructor(private fb: FormBuilder, private goalService: GoalService) {}

    @Input() goalId: string;

    goal: Goal;

    form = this.fb.group({
        criteriaWasMet: [null],
        criteriaNotMetReasons: [''],
        goalWasEffective: [null],
        retroComments: [''],
    });

    ngOnInit() {
        this.goalService.get(this.goalId).subscribe((goal: Goal) => {
            this.goal = goal;
        });
    }

    /**
     * Set the value of the form control "criteriaWasMet"
     * @param criteriaWasMet the boolean vaule being set
     */
    setCriteriaWasMet(criteriaWasMet: boolean): void {
        this.form.get('criteriaWasMet').setValue(criteriaWasMet);
    }

    /**
     * Set the value of the form control "goalWasEffective"
     * @param goalWasEffective the boolean vaule being set
     */
    setGoalWasEffective(goalWasEffective: boolean): void {
        this.form.get('goalWasEffective').setValue(goalWasEffective);
    }

    /**
     * TODO: document
     */
    submitForm(): void {
        this.mergeFormIntoModel();
        this.goal.retroComplete = true;
        this.goalService.put(this.goal).subscribe(
            success => {
                // TODO: handle success/failure
            },
            error => {
                // TODO: handle error
            }
        );
    }

    /**
     * TODO: document
     */
    private mergeFormIntoModel(): void {
        this.goal.criteriaWasMet = this.form.get('criteriaWasMet').value;
        this.goal.criteriaNotMetReasons = this.form.get(
            'criteriaNotMetReasons'
        ).value;
        this.goal.goalWasEffective = this.form.get('goalWasEffective').value;
        this.goal.retroComments = this.form.get('retroComments').value;
    }
}
