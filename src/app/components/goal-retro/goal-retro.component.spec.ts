import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalRetroComponent } from './goal-retro.component';

describe('GoalRetroComponent', () => {
    let component: GoalRetroComponent;
    let fixture: ComponentFixture<GoalRetroComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
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
});
