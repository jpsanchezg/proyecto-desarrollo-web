import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
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
}

