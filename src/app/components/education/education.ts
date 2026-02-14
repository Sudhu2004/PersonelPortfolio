import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { UiStateService } from '../../services/ui-state.service';
import { Education } from '../../models/content.interface';
import { Observable } from 'rxjs';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class EducationComponent implements OnInit {
  educationData$: Observable<Education[]> | undefined;
  activeId: any;

  constructor(
    private contentService: ContentService,
    private uiState: UiStateService
  ) {
    this.activeId = this.uiState.activeDescription;
  }

  ngOnInit() {
    this.educationData$ = this.contentService.getEducation();
  }

  toggleCourses(index: number) {
    this.uiState.toggleDescription(`education-${index}`);
  }

  isActive(index: number): boolean {
    return this.activeId() === `education-${index}`;
  }
}
