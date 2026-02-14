import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor etc
import { ContentService } from '../../services/content.service';
import { Home } from '../../models/content.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  homeData$: Observable<Home> | undefined;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.homeData$ = this.contentService.getHome();
    console.log(this.homeData$);
  }
}
