import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { UiStateService } from '../../services/ui-state.service';
import { Award } from '../../models/content.interface';
import { Observable } from 'rxjs';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './awards.html',
  styleUrls: ['./awards.css']
})
export class AwardsComponent implements OnInit {
  awardsData$: Observable<Award[]> | undefined;
  activeId: any;

  constructor(
    private contentService: ContentService,
    private uiState: UiStateService
  ) {
    this.activeId = this.uiState.activeDescription;
  }

  ngOnInit() {
    this.awardsData$ = this.contentService.getAwards();
  }

  toggleDescription(index: number) {
    this.uiState.toggleDescription(`award-${index}`);
  }

  isActive(index: number): boolean {
    return this.activeId() === `award-${index}`;
  }
}
