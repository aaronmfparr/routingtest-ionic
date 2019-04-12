import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit
{

  title: any;

  constructor(
    private app: AppComponent
  )
  {
    this.title = 'Your Oyster';
  }

  ngOnInit()
  {
    this.app.setTitle(this.title);
  }

}
