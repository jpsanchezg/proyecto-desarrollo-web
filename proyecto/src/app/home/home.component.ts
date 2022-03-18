import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private router: Router) {}
    newChange(): void {
        this.router.navigateByUrl('master');
    }
    goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/votes'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

  ngOnInit(): void {
  }

}
