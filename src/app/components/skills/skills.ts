import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { SkillCategory } from '../../models/content.interface';
import { Observable } from 'rxjs';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent implements OnInit {
  skillsData$: Observable<SkillCategory[]> | undefined;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.skillsData$ = this.contentService.getSkills();
  }
}
