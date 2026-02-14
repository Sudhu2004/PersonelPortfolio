import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css']
})
export class ContactFormComponent {
  isOpen = false;
  isLoading = false;
  statusMessage = '';
  isSuccess = false;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient,
    private elementRef: ElementRef
  ) { }

  // Listen for clicks outside the component
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.isOpen) {
      this.isOpen = false;
      this.statusMessage = '';
    }
  }

  toggleForm() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.statusMessage = '';
    }
  }

  sendMessage() {
    this.isLoading = true;
    this.statusMessage = 'Opening your email client...';

    const subject = encodeURIComponent(`Portfolio Contact: ${this.formData.name}`);
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
    );

    // Open mailto link
    window.location.href = `mailto:sudhrshan18@gmail.com?subject=${subject}&body=${body}`;

    // Close form after a brief delay (email client opens almost instantly)
    setTimeout(() => {
      this.resetForm();
      this.toggleForm();
      this.isLoading = false;
    }, 1500);
  }

  resetForm() {
    setTimeout(() => {
      this.formData = { name: '', email: '', message: '' };
      this.statusMessage = '';
    }, 3000);
  }
}
