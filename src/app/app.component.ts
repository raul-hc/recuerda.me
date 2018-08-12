import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _email = new FormControl('', [Validators.required, Validators.email]);
  message: string;

  getErrorMessage() {
    return this._email.hasError('required') ?
      'Tienes que introducir un email' : this._email.hasError('_email') ?
        'No es un email valido' : '';
  }

  constructor(public snackBar: MatSnackBar, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'event',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/event-icon.svg'));
  }

  saveReminder(event) {
    console.log(event);
    this.snackBar.open('Recordatorio guardado!')._dismissAfter(1000);

    setTimeout( () => {
      this.resetFields();
    }, 1000 );
  }

  isdataCorrect(): boolean {
    return (this.isValidString(this.message) && this.email.valid);
  }

  isValidString(srt: string): boolean {
    return (srt !== null && srt !== '' && srt !== undefined);
  }

  resetFields() {
    this.message = '';
    this._email.reset();
  }

  get email(): FormControl {
    return this._email;
  }
  set email(value: FormControl) {
    this._email = value;
  }
}
