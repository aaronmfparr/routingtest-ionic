import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppComponent } from '../app.component';

@Component(
{
  selector: 'app-home',
  templateUrl: 'hell.page.html',
  styleUrls: ['hell.page.scss'],
})

export class HellPage implements OnInit
{
  layer: any;
  title: any;

  constructor
  (
    private activeRoute: ActivatedRoute,
    private router: Router,
    private app: AppComponent
  )
  {
    this.title = 'Hell';
  }

  ngOnInit()
  {
    // this.layer = this.activeRoute.snapshot.paramMap.get('layer');
    this.activeRoute.paramMap.subscribe
    (
      params =>
      {
        this.layer = params.get('layer');
        if (!this.layer)
        {
          alert('no value');
          this.layer = 'surface';
        }
        this.title = 'Hell - ' + this.layer;
        this.app.setTitle(this.title);
      }
    )
  }

  public respond(theValue: string)
  {
    this.layer = theValue;
    this.router.navigate(['hell', this.layer]);
  }
}
