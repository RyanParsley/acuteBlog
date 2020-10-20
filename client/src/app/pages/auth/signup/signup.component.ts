import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-signup',
  template: `
    <app-login-form title="Welcome to the party pal!" [submit]="submitSignup" submitText="Signup"></app-login-form>
  `
})
export class SignupComponent implements OnInit {
  animal = 'snake';
  name = 'Plisken';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.openDialog();
  }

  submitSignup(): void {
    alert('Signup form submitted!');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
