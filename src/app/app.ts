import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { ChatbotWidgetComponent } from './shared/chatbot-widget/chatbot-widget';
import { ContactFormComponent } from './shared/contact-form/contact-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ChatbotWidgetComponent, ContactFormComponent],
  templateUrl: './app.html', // Re-using existing template file but will replace contents
  styleUrls: ['./app.css']
})
export class App {
  title = 'portfolio';
}
