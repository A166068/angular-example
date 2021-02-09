import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ConnectFormComponent } from '../connect-form/connect-form.component';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-data-source',
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.sass']
})
export class DataSourceComponent implements OnInit {

  constructor(public MatDialog: MatDialog) { }

  ngOnInit(): void {
    let dialogRef = this.MatDialog.open(LoginFormComponent,
      {
        width: '20%',
        disableClose: true
      });
  }
  openDialog() {
    let dialogRef = this.MatDialog.open(ConnectFormComponent,
      {
        width: '50%'
      });
    // constructor(private MatDialog: MatDialog) {}

    // openDialog() {
    //   const dialogConfig = new MatDialogConfig();
    //   this.MatDialog.open(LoginFormComponent, dialogConfig);
    // }
  }
}