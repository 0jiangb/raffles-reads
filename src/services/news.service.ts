import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { zip } from 'rxjs/observable/zip'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/take';

@Injectable()
export class NewsService {

    // Source data
    private _done = new BehaviorSubject(false);
    private _loading = new BehaviorSubject(false);
    private _data = new BehaviorSubject([]);

    private apiKey: string;
    private cursor: Object = {};
    private keywords: Array<string>;
    private sources: Array<string> = [
        'abc-news',
        'abc-news-au',
        'ars-technica',
        'associated-press',
        'australian-financial-review',
        'axios',
        'bbc-news',
        'bbc-sport',
        'bleacher-report',
        'bloomberg',
        'business-insider',
        'buzzfeed',
        'cbs-news',
        'cnbc',
        'cnn',
        'daily-mail',
        'ign',
        'mashable',
        'wired',
        'google-news',
        'fortune',
        'financial-times',
        'entertainment-weekly',
        'espn',
        'engadget',
        'the-wall-street-journal',
        'four-four-two',
        'fox-news',
        'fox-sports',
        'medical-news-today',
        'metro',
        'mirror',
        'msnbc',
        'national-geographic',
        'breitbart-news',

    ];

    // Observable data
    data: Observable<any>;
    done: Observable<boolean> = this._done.asObservable();
    loading: Observable<boolean> = this._loading.asObservable();

    constructor(private http: HttpClient) { }

    // Initial query sets options and defines the Observable
    init(keywords: Array<string>, apiKey: string) {

        if (keywords.length == 0) {
            this._done.next(true);
            return;
        }
        this.keywords = keywords;
        this.apiKey = apiKey;

        const first = zip(...keywords.map(keyword => this.http.get(
            "https://newsapi.org/v2/top-headlines",
            { "params": { "sources": this.sources.toString(), "q": keyword, "apiKey": this.apiKey } }
        )));
        this.mapAndUpdate(first)
        this.data = this._data.asObservable()
            .scan((acc, val) => {
                return acc.concat(val);
            });
    }


    more() {
        const more = zip(...this.keywords.map(keyword => {
            this.cursor[keyword] = (this.cursor[keyword] + 1) || 2;
            return this.http.get(
                "https://newsapi.org/v2/top-headlines",
                { "params": { "sources": this.sources.toString(), "q": keyword, "page": this.cursor[keyword], "apiKey": this.apiKey } }
            );
        }
        ));
        this.mapAndUpdate(more);
    }


    private mapAndUpdate(res: Observable<Array<object>>) {

        if (this._done.value || this._loading.value) { return };
        this._loading.next(true);

        return res.subscribe(arr => {
            arr.filter(res => res['status'] != 'error');
            if (arr.length == 0) {
                this._loading.next(false);
                this._done.next(true);
            }
            const articles = arr.map(res => res['articles']);
            let longest = 0;
            articles.forEach(function (xs: Array<string>) {
                if (xs.length > longest) {
                    longest = xs.length;
                }
            });
            let ret = [];
            for (let i = 0; i < longest; ++i) {
                articles.forEach(function (xs: Array<string>) {
                    if (xs.length > i) {
                        ret.push(xs[i]);
                    }
                });
            }
            this._data.next(ret);
            this._loading.next(false);
        });
    }


    // Reset the page
    reset() {
        this.keywords = [];
        this.cursor = {};
        this._data.next([]);
        this._done.next(false);
    }

}
