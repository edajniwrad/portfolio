import { PortfolioComponent } from './../portfolio/portfolio.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html'
})
export class ImageComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<PortfolioComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {

  }
}

