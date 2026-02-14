import { Component, Input } from '@angular/core';

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
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 15px;
      padding: 1.5rem;
      transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
      height: 100%;
      backdrop-filter: blur(5px);
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(37, 117, 252, 0.3);
    }
  `]
})
export class CardComponent { }
