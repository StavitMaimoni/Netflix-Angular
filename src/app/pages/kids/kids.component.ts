import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';
import { TvApiServiceService } from 'src/app/service/tv-show-api-service.service';

@Component({
    selector: 'app-kids',
    templateUrl: './kids.component.html',
    styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
    tvShowClicked = false;

    constructor(private movieService: MovieApiServiceService,
        private tvService: TvApiServiceService,
        private title: Title, private meta: Meta) {
        this.title.setTitle('Kids - Stavit-TV');
        this.meta.updateTag({ name: 'description', content: 'watch online movies' });
    }

    bannerResult: any = [];
    animationMovieResult: any = [];
    kidsTv: any = [];
    scienceFictionMovieResult: any = [];
    fantasyTv: any = [];
    familyTvResult: any = [];

    ngOnInit(): void {
        this.bannerData();
        this.animationMovie();
        this.fetchKidsTv();
        this.sciencefictionMovie();
        this.fetchFantasyTv();
        this.familyTv();


        this.tvService.getTvShowClicked().subscribe(clickStatus => {
            this.tvShowClicked = clickStatus;
        });
    }

    public leftScroll(containerClass: string) {
        const container = document.querySelector(`.${containerClass}`);
        if (container !== null) {
            container.scrollBy({
                left: -350,
                behavior: 'smooth',
            });
        }
    }

    public rightScroll(containerClass: string) {
        const container = document.querySelector(`.${containerClass}`);
        if (container !== null) {
            container.scrollBy({
                left: 350,
                behavior: 'smooth',
            });
        }
    }

    // bannerdata
    bannerData() {
        this.movieService.bannerApiData().subscribe((result) => {
            this.bannerResult = result.results;
        });
    }

    //  Kids TV shows
    fetchKidsTv() {
        this.tvService.fetchKidsTv().subscribe((result) => {
            this.kidsTv = result.results;
        });
    }

    // animation movies
    animationMovie() {
        this.movieService.fetchAnimationMovies().subscribe((result) => {
            this.animationMovieResult = result.results;
        });
    }

    // science-fiction TV 
    sciencefictionMovie() {
        this.movieService.fetchScienceFictionMovies().subscribe((result) => {
            this.scienceFictionMovieResult = result.results;
        });
    }

    //  Fantasy TV shows
    fetchFantasyTv() {
        this.tvService.fetchFantasyTv().subscribe((result) => {
            this.fantasyTv = result.results;
        });
    }

    //  Family TV shows
    familyTv() {
        this.tvService.familyTv().subscribe((result) => {
            this.familyTvResult = result.results;
        });
    }
}
