import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  show = false
  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.show = true;
    }, 5000);
  }
}
