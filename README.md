# ROUTINGTEST-IONIC

## Why?
I am learning ionic's routing and might need this experimental project on another dev machine too, so... thats why this repository exists. Feel free to ignore.

## What Have I Learned?
If I am disciplined enough, I'll record what I learn here.

### Angular
Ionic by default uses Angular's routing. Angular's documentation: [https://angular.io/guide/router](https://angular.io/guide/router)

### 404
404's are not captured automatically. You need to implement a wildcard in your routing to capture them like I have done in `app-routing.module`:
```
{ path: '**', redirectTo: '404', pathMatch: 'full' },
{ path: '404', loadChildren: './404/404.module#Page404Module' }
```
Note that these are the last two in my list of routes. Routing is checked from top to bottom. The first match found is followed. If you put the wildcard at the top, it will capture everything, and no routes below it will be used.

### Route Parameters
* `redirectTo` changes the route from the first match to the value of `redirectTo`, rather than using the first route as an alias for the second.
* `loadChildren` is used with lazy loading, which means that the resources are loaded when they are needed (when a link is clicked) rather than when the app is first loaded. In order for this to work you need to create a module for your page, in this case a file named `404.module.ts` with an exported class named `Page404Module`.

### Parameters
A route can be setup to take parameters by preceding a route with a `:` as follows
```
{ path: 'hell/:layer', loadChildren: './hell/hell.module#HellPageModule' },
```

Parameters are retrieved from the route using the module `ActivatedRoute`. The code below shows an example of "subscribing" to `paramMap` to get parameters fromthe URL so that we pick up every change rather than only on page load.
```
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component(
{
  selector: 'app-home',
  templateUrl: 'hell.page.html',
  styleUrls: ['hell.page.scss'],
})
export class HellPage implements OnInit
{
  this.layer: any;
  constructor
  (
    private activeRoute: ActivatedRoute
  ){}

  ngOnInit()
  {
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
      }
    )
  }
}
```
