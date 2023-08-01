import { Component, OnInit, SimpleChanges } from '@angular/core'

@Component({
    //prefix to selector
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.components.scss']
})
export class MoviesComponent implements OnInit {
    title = 'movies component works';
    ngOnInit() {
        console.log('movies on init');

    }
    ngOnChanges(changes: SimpleChanges):void {
        console.log(changes);
        
    }
}
