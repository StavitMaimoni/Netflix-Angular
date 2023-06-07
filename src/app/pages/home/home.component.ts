import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';
import { TvApiServiceService } from 'src/app/service/tv-show-api-service.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    tvShowClicked = false;

    constructor(private movieService: MovieApiServiceService,
        private tvService: TvApiServiceService,
        private title: Title, private meta: Meta) {
        this.title.setTitle('Home - Stavit-TV');
        this.meta.updateTag({ name: 'description', content: 'watch online movies' });
    }
    getMovieVideoResult:any;
    bannerResult: any = [];
    trendingMovieResult: any = [];
    actionMovieResult: any = [];
    adventureMovieResult: any = [];
    animationMovieResult: any = [];
    comedyMovieResult: any = [];
    documentaryMovieResult: any = [];
    sciencefictionMovieResult: any = [];
    thrillerMovieResult: any = [];
    topRatedTv: any = [];
    actionTv: any = [];
    mysteryTv: any = [];
    realityTv: any = [];
    comedyTv: any = [];
    documentaryTv: any = [];
    fantasyTv: any = [];
    kidsTv: any = [];


    ngOnInit(): void {
        this.bannerData();
        this.trendingData();
        this.actionMovie();
        this.adventureMovie();
        this.comedyMovie();
        this.animationMovie();
        this.documentaryMovie();
        this.sciencefictionMovie();
        this.thrillerMovie();
        this.topRatedTvApiData();
        this.fetchActionTv();
        this.fetchMysteryTv();
        this.fetchRealityTv();
        this.fetchComedyTv();
        this.fetchDocumentaryTv();
        this.fetchFantasyTv();
        this.fetchKidsTv();;

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
      
      getVideo(id:any)
      {
        this.movieService.getMovieVideo(id).subscribe((result)=>{
            result.results.forEach((element:any) => {
                if(element.type=="Trailer")
                {
                  this.getMovieVideoResult = element.key;
                }
            });
    
        });
      }
    // bannerdata
    bannerData() {
        this.movieService.bannerApiData().subscribe((result) => {
            this.bannerResult = result.results;
        });
    }
    //movies api start:
    // -------------------------------
    //  trending
    trendingData() {
        this.movieService.trendingMovieApiData().subscribe((result) => {
            this.trendingMovieResult = result.results;
        });
    }

    // action 
    actionMovie() {
        this.movieService.fetchActionMovies().subscribe((result) => {
            this.actionMovieResult = result.results;
        });
    }


    // adventure 
    adventureMovie() {
        this.movieService.fetchAdventureMovies().subscribe((result) => {
            this.adventureMovieResult = result.results;
        });
    }


    // animation 
    animationMovie() {
        this.movieService.fetchAnimationMovies().subscribe((result) => {
            this.animationMovieResult = result.results;
        });
    }

    // comedy 
    comedyMovie() {
        this.movieService.fetchComedyMovies().subscribe((result) => {
            this.comedyMovieResult = result.results;
        });
    }

    // documentary 
    documentaryMovie() {
        this.movieService.fetchDocumentaryMovies().subscribe((result) => {
            this.documentaryMovieResult = result.results;
        });
    }


    // science-fiction 
    sciencefictionMovie() {
        this.movieService.fetchScienceFictionMovies().subscribe((result) => {
            this.sciencefictionMovieResult = result.results;
        });
    }

    // thriller
    thrillerMovie() {
        this.movieService.fetchThrillerMovies().subscribe((result) => {
            this.thrillerMovieResult = result.results;
        });
    }
    //movies api end:
    // -------------------------------


    //TV shows api start:
    // -------------------------------
    // Top rated
    topRatedTvApiData() {
        this.tvService.topRatedTvApiData().subscribe((result) => {
            this.topRatedTv = result.results;
        });
    }

    //  Action TV shows
    fetchActionTv() {
        this.tvService.fetchActionTv().subscribe((result) => {
            this.actionTv = result.results;
        });
    }

    //  Mystery TV shows
    fetchMysteryTv() {
        this.tvService.fetchMysteryTv().subscribe((result) => {
            this.mysteryTv = result.results;
        });
    }

    //  Reality TV shows
    fetchRealityTv() {
        this.tvService.fetchRealityTv().subscribe((result) => {
            this.realityTv = result.results;
        });
    }

    //  Comedy TV shows
    fetchComedyTv() {
        this.tvService.fetchComedyTv().subscribe((result) => {
            this.comedyTv = result.results;
        });
    }

    //  Documentary TV shows
    fetchDocumentaryTv() {
        this.tvService.fetchDocumentaryTv().subscribe((result) => {
            this.documentaryTv = result.results;
        });
    }

    //  Fantasy TV shows
    fetchFantasyTv() {
        this.tvService.fetchFantasyTv().subscribe((result) => {
            this.fantasyTv = result.results;
        });
    }

    //  Kids TV shows
    fetchKidsTv() {
        this.tvService.fetchKidsTv().subscribe((result) => {
            this.kidsTv = result.results;
        });
    }
    //TV shows api end:
    // -------------------------------
}
