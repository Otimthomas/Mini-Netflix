import { Component, OnInit } from "@angular/core";

@Component({
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  logout() {
    console.log("You have logged out");
  }

  handleQuery(value) {
    console.log(value.query.toLowerCase());
  }
}
