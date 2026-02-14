import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { UiStateService } from '../../services/ui-state.service';
import { Project } from '../../models/content.interface';
import { Observable } from 'rxjs';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements OnInit {
  projectsData$: Observable<Project[]> | undefined;
  activeId: any;

  constructor(
    private contentService: ContentService,
    private uiState: UiStateService
  ) {
    this.activeId = this.uiState.activeDescription;
  }

  ngOnInit() {
    this.projectsData$ = this.contentService.getProjects();
  }

  toggleDescription(index: number) {
    this.uiState.toggleDescription(`project-${index}`);
  }

  isActive(index: number): boolean {
    return this.activeId() === `project-${index}`;
  }
}
