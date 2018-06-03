import { Injectable } from '@angular/core';

// https://newsapi.org/docs/client-libraries/node-js
// Declare NewsAPI
import * as NewsAPI from 'newsapi';
const newsapi = new NewsAPI('df20978da5994f7c9880e7017771b3e6');

@Injectable()
export class NewsService {

    getNews(category: String) : Promise<any>{
        return newsapi.v2.topHeadlines({
            country: 'sg',
            category: 'Science'
        });
    }

}
