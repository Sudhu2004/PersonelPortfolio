import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { EducationComponent } from './components/education/education';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { SkillsComponent } from './components/skills/skills';
import { AwardsComponent } from './components/awards/awards';
import { LeadershipComponent } from './components/leadership/leadership';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'education', component: EducationComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'awards', component: AwardsComponent },
    { path: 'leadership', component: LeadershipComponent },
    { path: '**', redirectTo: '' }
];
