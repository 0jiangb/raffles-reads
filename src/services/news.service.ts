import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/take';

@Injectable()
export class NewsService {

  // Source data
  private _done = new BehaviorSubject(false);
  private _loading = new BehaviorSubject(false);
  private _data = new BehaviorSubject([]);

  private params: any;

  // Observable data
  data: Observable<any>;
  done: Observable<boolean> = this._done.asObservable();
  loading: Observable<boolean> = this._loading.asObservable();
  
  constructor(private http: HttpClient) { }

  // Initial query sets options and defines the Observable
  init(category?, q?) {

    this.params = {};
    this.params["apiKey"] = 'df20978da5994f7c9880e7017771b3e6';
    this.params["country"] = "sg";
    if (category) {
        this.params["category"] = category;
    }
    if (q) {
        this.params["q"] = q;
    }
    this.params["page"] = 1;
    const first = this.http.get("https://newsapi.org/v2/top-headlines", {"params": this.params});
    this.mapAndUpdate(first)
    // Create the observable array for consumption in components
    this.data = this._data.asObservable()
        .scan( (acc, val) => {
          return acc.concat(val)
        })
  }


  // Retrieves additional data from firestore
  more() {
    this.params["page"] += 1;
    const more = this.http.get("https://newsapi.org/v2/top-headlines", {"params": this.params});
    this.mapAndUpdate(more)
  }


  // Maps the snapshot to usable format the updates source
  private mapAndUpdate(res: Observable<object>) {

    if (this._done.value || this._loading.value) { return };

    // loading
    this._loading.next(true)
    return res.subscribe(data => {
        this._data.next(data["articles"])
        this._loading.next(false)

        if (this.params["pages"] * 20 >= data["totalResults"]) {
            this._done.next(true)
        }
    })
  }


  // Reset the page
  reset() {
    this._data.next([])
    this._done.next(false)
  }

}
