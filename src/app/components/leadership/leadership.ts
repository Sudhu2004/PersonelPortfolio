import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { UiStateService } from '../../services/ui-state.service';
import { Leadership } from '../../models/content.interface';
import { Observable } from 'rxjs';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './leadership.html',
  styleUrls: ['./leadership.css']
})
export class LeadershipComponent implements OnInit {
  leadershipData$: Observable<Leadership[]> | undefined;
  activeId: any;

  constructor(
    private contentService: ContentService,
    private uiState: UiStateService
  ) {
    this.activeId = this.uiState.activeDescription;
  }

  ngOnInit() {
    this.leadershipData$ = this.contentService.getLeadership();
  }

  toggleDescription(index: number) {
    this.uiState.toggleDescription(`leadership-${index}`);
  }

  isActive(index: number): boolean {
    return this.activeId() === `leadership-${index}`;
  }
}
