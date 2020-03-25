import { ImageComponent } from './../image/image.component';
import { PortfolioService } from './../../service/portfolio.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public portfolios = [];
  private url: any = '/assets/data/portfolio.json';

  title = 'Example Angular 8 Material Dialog';

  constructor(private service: PortfolioService, private dialog: MatDialog) {}

  openDialog(portfolio): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = portfolio;
    const dialogRef = this.dialog.open(ImageComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

  ngOnInit(): void {
    this.service.get(this.url)
    .subscribe(data => this.portfolios = data);
  }
}
