import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class TvApiServiceService {
    private tvShowClicked = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) { }

    baseurl = "https://api.themoviedb.org/3/";
    apikey = "08cc33bd5ae3a747598ce2ad84376e66";

    //set TV show click status 
    public setTvShowClicked(clickStatus: boolean) {
        this.tvShowClicked.next(clickStatus);
    }

    //get TV show click status 
    public getKidsTvShowClicked(): Observable<boolean> {
        return this.tvShowClicked.asObservable();
    }

    //set kids TV show click status 
    public setKidsTvShowClicked(clickStatus: boolean) {
        this.tvShowClicked.next(clickStatus);
    }

    //get kids TV show click status 
    public getTvShowClicked(): Observable<boolean> {
        return this.tvShowClicked.asObservable();
    }

    // top rated api data:
    topRatedTvApiData(): Observable<any> {
        return this.http.get(`${this.baseurl}tv/top_rated?api_key=${this.apikey}`);
    }

    // get TV-show details
    getTvDetails(data: any): Observable<any> {
        return this.http.get(`${this.baseurl}tv/${data}?api_key=${this.apikey}`)
    }

    // get TV Video
    getTvVideo(data: any): Observable<any> {
        return this.http.get(`${this.baseurl}tv/${data}/videos?api_key=${this.apikey}`)
    }

    // get TV Cast
    getTvCast(data: any): Observable<any> {
        return this.http.get(`${this.baseurl}tv/${data}/credits?api_key=${this.apikey}`)
    }

    //TV shows genres start:
    // ------------------------
    // Mystery 
    fetchMysteryTv(): Observable<any> {
        return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=9648`);
    }

    // Action 
    fetchActionTv(): Observable<any> {
        return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=10759`);
    }

    // Reality 
    fetchRealityTv(): Observable<any> {
        return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=10764`);
    }

    // Comedy 
    fetchComedyTv(): Observable<any> {
        return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=35`);
    }

    // Documentary 
    fetchDocumentaryTv(): Observable<any> {
        return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=99`);
    }

    // Sci-Fi & Fantasy 
    fetchFantasyTv(): Observable<any> {
        return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=10765`);
    }

    // Kids 
    fetchKidsTv(): Observable<any> {
        return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=10762`);
    }

    // family
    familyTv(): Observable<any> {
        return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=10751`);
    }
    //TV shows genres end:
    // ------------------------
}
