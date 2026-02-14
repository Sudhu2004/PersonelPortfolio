import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UiStateService {
    // Using Angular Signals for reactive state management
    // 'activeDescription' holds the ID of the currently expanded item.
    // We can use a combination of 'section-id' to ensure uniqueness.
    // e.g., 'experience-0', 'education-1'
    private activeDescriptionSignal = signal<string | null>(null);
    readonly activeDescription = this.activeDescriptionSignal.asReadonly();

    toggleDescription(id: string) {
        if (this.activeDescriptionSignal() === id) {
            this.activeDescriptionSignal.set(null); // Close if already open
        } else {
            this.activeDescriptionSignal.set(id); // Open new one
        }
    }

    closeAll() {
        this.activeDescriptionSignal.set(null);
    }
}
