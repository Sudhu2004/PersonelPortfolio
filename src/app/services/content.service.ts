import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Home, Education, Experience, Project, SkillCategory, Award, Leadership, AiConfig } from '../models/content.interface';

@Injectable({
    providedIn: 'root'
})
export class ContentService {
    private contentPath = 'assets/content';

    constructor(private http: HttpClient) { }

    getHome(): Observable<Home> {
        return this.http.get<Home>(`${this.contentPath}/home.json`);
    }

    getEducation(): Observable<Education[]> {
        return this.http.get<{ education: Education[] }>(`${this.contentPath}/education.json`)
            .pipe(map(data => data.education));
    }

    getExperience(): Observable<Experience[]> {
        return this.http.get<{ experience: Experience[] }>(`${this.contentPath}/experience.json`)
            .pipe(map(data => data.experience));
    }

    getProjects(): Observable<Project[]> {
        return this.http.get<{ projects: Project[] }>(`${this.contentPath}/projects.json`)
            .pipe(map(data => data.projects));
    }

    getSkills(): Observable<SkillCategory[]> {
        return this.http.get<{ skills: SkillCategory[] }>(`${this.contentPath}/skills.json`)
            .pipe(map(data => data.skills));
    }

    getAwards(): Observable<Award[]> {
        return this.http.get<{ awards: Award[] }>(`${this.contentPath}/awards.json`)
            .pipe(map(data => data.awards));
    }

    getLeadership(): Observable<Leadership[]> {
        return this.http.get<{ leadership: Leadership[] }>(`${this.contentPath}/leadership.json`)
            .pipe(map(data => data.leadership));
    }

    // Basic parsing for the Markdown config (simple key-value extraction for now)
    getAiConfig(): Observable<AiConfig> {
        return this.http.get<AiConfig>(`${this.contentPath}/chatbot.json`);
    }
}
