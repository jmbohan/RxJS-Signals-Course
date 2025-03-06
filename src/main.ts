import { Component, OnDestroy, OnInit } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { from, fromEvent, of, Subscription } from "rxjs";

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
  subEvent!: Subscription;
  subKeyDown!: Subscription;

  ngOnInit(): void {
    // this.sub = of(2, 4, 6, 8).subscribe((item) =>
    //   console.log("Value from of: ", item)
    // );
    // this.subArray = of([2, 4, 6, 8]).subscribe((item) =>
    //   console.log("Value from of array: ", item)
    // );
    // this.subFrom = from([2, 4, 6, 8]).subscribe({
    //   next: (item) => console.log("Value from from: ", item),
    //   error: (err) => console.log("Error: ", err),
    //   complete: () => console.log("From complete"),
    // });
    // this.subThreeStrings = of("Hello", "World", "Angular").subscribe({
    //   next: (item) => console.log("Value emitted: ", item),
    //   error: (err) => console.log("Error: ", err),
    //   complete: () => console.log("No more values"),
    // });
    this.subEvent = fromEvent(document, "click").subscribe({
      next: (ev) => console.log("click event", ev.target),
      error: (err) => console.log("Error: ", err),
      complete: () => console.log("No more click events"),
    });
    const keys: string[] = [];
    this.subKeyDown = fromEvent(document, "keydown").subscribe((ev) => {
      keys.push((ev as KeyboardEvent).key);
      console.log("Keys: ", keys);
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subArray.unsubscribe();
    this.subFrom.unsubscribe();
    this.subThreeStrings.unsubscribe();
    this.subEvent.unsubscribe();
    this.subKeyDown.unsubscribe();
  }
}

bootstrapApplication(App);
// a change
