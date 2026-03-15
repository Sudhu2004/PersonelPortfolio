import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .card {
      background: #ffffff;
      border: 1px solid #dadce0;
      border-radius: 12px;
      padding: 1.5rem;
      height: 100%;

      /* Typography */
      font-family: "Google Sans", "Roboto", Arial, sans-serif;
      font-size: 14px;
      color: #202124;
      line-height: 1.5;

      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }

    .card:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.15);
    }

    /* Optional styling for headings inside cards */

    .card h1,
    .card h2,
    .card h3,
    .card h4 {
      margin-top: 0;
      font-weight: 600;
      color: #202124;
    }

    .card p {
      margin: 0.5rem 0 0 0;
      color: #5f6368;
    }
  `]
})
export class CardComponent {}