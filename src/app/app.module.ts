import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalFeedComponent } from './components/goal-feed/goal-feed.component';
import { GoalRetroComponent } from './components/goal-retro/goal-retro.component';

@NgModule({
    declarations: [AppComponent, GoalRetroComponent, GoalFeedComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
