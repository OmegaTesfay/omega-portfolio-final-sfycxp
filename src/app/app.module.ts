import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BiographyComponent } from './biography/biography.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { QuizzesComponent } from './quizzes/quizzes.component';

@NgModule({
  imports: [
  BrowserModule,
   FormsModule,
   RouterModule.forRoot(
     [{path: '', redirectTo: 'biography', pathMatch: 'full'},
     {path: 'biography', component: BiographyComponent},
     {path: 'contact', component: ContactComponent},
     {path: 'navbar', component: NavBarComponent},
     {path: 'quizzes', component: QuizzesComponent},
     {path: 'resume', component: ResumeComponent},
     ])],
  declarations: [ AppComponent, HelloComponent, NavBarComponent, BiographyComponent, ResumeComponent, ContactComponent, QuizzesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
