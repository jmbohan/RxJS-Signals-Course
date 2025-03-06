import { Component, OnDestroy, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App implements OnInit, OnDestroy{
ngOnInit(): void {
throw new Error('Method not implemented.');
}
ngOnDestroy(): void {
throw new Error('Method not implemented.');
}
  name = 'Angular';
}

bootstrapApplication(App);
