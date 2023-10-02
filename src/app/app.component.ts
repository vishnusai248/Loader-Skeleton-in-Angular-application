import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Skeleton-Loader';
  isLoading: boolean = false;

  fetchData() {
    this.isLoading = true;

    // setTimeout(() => {
      // api call here
    //   this.isLoading = false;
    // }, 200000); // Simulate a 2-second delay
  }
}
