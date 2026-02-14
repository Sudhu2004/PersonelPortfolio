import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { UiStateService } from '../../services/ui-state.service';
import { Experience } from '../../models/content.interface';
import { Observable } from 'rxjs';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent implements OnInit {
  experienceData$: Observable<Experience[]> | undefined;
  activeId: any;

  constructor(
    private contentService: ContentService,
    private uiState: UiStateService
  ) {
    this.activeId = this.uiState.activeDescription;
  }

  ngOnInit() {
    this.experienceData$ = this.contentService.getExperience();
  }

  toggleDescription(index: number) {
    this.uiState.toggleDescription(`experience-${index}`);
  }

  isActive(index: number): boolean {
    return this.activeId() === `experience-${index}`;
  }
}
