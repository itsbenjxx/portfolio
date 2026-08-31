import {Component, inject, signal} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ContactService} from './service/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.sass'
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService)

  readonly contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  readonly isSubmitting = signal<boolean>(false)
  readonly isSuccess = signal<boolean>(false)
  readonly errorMessage = signal<string|null>(null)

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAsTouched()
      return
    }

    this.isSubmitting.set(true);
    this.errorMessage.set(null);
    this.isSuccess.set(false);

    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.isSuccess.set(true);
        this.contactForm.reset()
      },
      error: error => {
        this.isSubmitting.set(false);
        this.errorMessage.set(error.message ||'Une erreur est survenue lors de l\'envoi du message.');
      }
    })
  }
}
