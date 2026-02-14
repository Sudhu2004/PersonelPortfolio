import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentService } from '../../services/content.service';
import { AiConfig } from '../../models/content.interface';

@Component({
  selector: 'app-chatbot-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot-widget.html',
  styleUrls: ['./chatbot-widget.css']
})
export class ChatbotWidgetComponent implements OnInit {
  isOpen = false;
  config: AiConfig | null = null;
  messages: { sender: 'user' | 'bot', text: string }[] = [];
  newMessage = '';
  isLoading = false;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getAiConfig().subscribe(config => {
      this.config = config;
      if (this.config.enabled) {
        this.messages.push({ sender: 'bot', text: "Hello! I'm Sudhu's AI assistant. How can I help you today?" });
      }
    });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.newMessage.trim() || !this.config?.enabled) return;

    const userMsg = this.newMessage;
    this.messages.push({ sender: 'user', text: userMsg });
    this.newMessage = '';
    this.isLoading = true;

    // Stub for actual API call
    setTimeout(() => {
      this.isLoading = false;
      this.messages.push({ sender: 'bot', text: "I'm currently in demo mode. My API connection isn't live yet, but I'd love to chat about Sudhu's work!" });
    }, 1000);
  }
}
