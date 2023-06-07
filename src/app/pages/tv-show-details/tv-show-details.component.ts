import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { TvApiServiceService } from 'src/app/service/tv-show-api-service.service';

@Component({
    selector: 'app-tv-show-details',
    templateUrl: './tv-show-details.component.html',
    styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit {

    constructor(private service: TvApiServiceService, private router: ActivatedRoute, private title: Title, private meta: Meta) { }
    getTvDetailResult: any;
    getTvVideoResult: any;
    getTvCastResult: any;
    movieUrl: string = "";
    ngOnInit(): void {
        let getParamId = this.router.snapshot.paramMap.get('id');
        this.getTv(getParamId);
        this.getVideo(getParamId);
        this.getTvCast(getParamId);
    }

    getTv(id: any) {
        this.service.getTvDetails(id).subscribe(async (result) => {
            this.getTvDetailResult = await result;
            // updatetags
            this.title.setTitle(`${this.getTvDetailResult.original_title} | ${this.getTvDetailResult.tagline}`);
            this.meta.updateTag({ name: 'title', content: this.getTvDetailResult.original_title });
            this.meta.updateTag({ name: 'description', content: this.getTvDetailResult.overview });

            // facebook
            this.meta.updateTag({ property: 'og:type', content: "website" });
            this.meta.updateTag({ property: 'og:url', content: `` });
            this.meta.updateTag({ property: 'og:title', content: this.getTvDetailResult.original_title });
            this.meta.updateTag({ property: 'og:description', content: this.getTvDetailResult.overview });
            this.meta.updateTag({ property: 'og:image', content: `https://image.tmdb.org/t/p/original/${this.getTvDetailResult.backdrop_path}`});
        });
    }

    getVideo(id: any) {
        this.service.getTvVideo(id).subscribe((result) => {
            result.results.forEach((element: any) => {
                if (element.type == "Trailer") {
                    this.getTvVideoResult = element.key;
                }
            });

        });
    }

    getTvCast(id: any) {
        this.service.getTvCast(id).subscribe((result) => {
            this.getTvCastResult = result.cast;
        });
    }
}
