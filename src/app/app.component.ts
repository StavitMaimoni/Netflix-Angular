import { Component, HostListener } from '@angular/core';
import { TvApiServiceService } from './service/tv-show-api-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{
    title = 'Stavit-TV';
    navbg: any;
    kidsClicked=false;

    constructor(private tvService: TvApiServiceService){}

    displayTvShow() {
       this.tvService.setTvShowClicked(true);
    }

    displayKidsTvShow() {
       this.tvService.setKidsTvShowClicked(true);
    }

    displayMovies() {
       this.tvService.setTvShowClicked(false);
    }

    displayKidsMovies() {
       this.tvService.setKidsTvShowClicked(false);
    }

    @HostListener('document:scroll') scrollover() {

        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            this.navbg = {
                'background-color': '#000000'
            }
        } else {
            this.navbg = {}
        }
    }
}
