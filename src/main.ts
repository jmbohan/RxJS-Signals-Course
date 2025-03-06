import { Component, OnDestroy, OnInit } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { from, of, Subscription } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App implements OnInit, OnDestroy {
  name = "Angular";

  sub!: Subscription;
  subArray!: Subscription;
  subFrom!: Subscription;
  subThreeStrings!: Subscription;

  ngOnInit(): void {
    this.sub = of(2, 4, 6, 8).subscribe((item) =>
      console.log("Value from of: ", item)
    );
    this.subArray = of([2, 4, 6, 8]).subscribe((item) =>
      console.log("Value from of array: ", item)
    );
    this.subFrom = from([2, 4, 6, 8]).subscribe({
      next: (item) => console.log("Value from from: ", item),
      error: (err) => console.log("Error: ", err),
      complete: () => console.log("From complete"),
    });  
    this.subThreeStrings = of("Hello", "World", "Angular").subscribe({
      next: (item) => console.log("Value emitted: ", item),
      error: (err) => console.log("Error: ", err),
      complete: () => console.log("No more values"),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
    this.subArray.unsubscribe();
    this.subFrom.unsubscribe();
    this.subThreeStrings.unsubscribe();
  }
}

bootstrapApplication(App);
