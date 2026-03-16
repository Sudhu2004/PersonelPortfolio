import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { ChatbotWidgetComponent } from './shared/chatbot-widget/chatbot-widget';

interface Bubble {
  size: number;
  left: string;
  top: string;
  duration: string;
  delay: string;
  tx: string;
  ty: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ChatbotWidgetComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'portfolio';

  bubbles: Bubble[] = Array.from({ length: 30 }, () => ({
    size: Math.random() * 80 + 10,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${Math.random() * 5 + 2 }s`,
    delay: `-${Math.random() * 20}s`,
    tx: `${(Math.random() - 0.5) * 200}px`,
    ty: `${(Math.random() - 0.5) * 200}px`,
  }));
}