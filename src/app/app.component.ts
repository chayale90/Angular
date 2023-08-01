import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  listOfMovies = ["avangers 1", "Ironman 2", "Spiderman"];

  mainChar = "Tony Stark"

  shouldBeRed: boolean = true;

  movie = {
    movieName: "Avangers 2",
    rating: 9
  }


}
