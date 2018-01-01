import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { ExperianceComponent } from './components/experiance/experiance.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { DataService } from './services/data.service';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'education', component:EducationComponent},
  {path: 'experiance', component:ExperianceComponent},
  {path: 'skills', component:SkillsComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'contact', component:ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    ExperianceComponent,
    SkillsComponent,
    NavbarComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
