import { Injectable } from '@angular/core';
import { Giph, GiphTrendingArray, GiphRandom } from "./giph";
import { HttpClient } from '@angular/common/http';

const TRENDING_URL: string = 'https://api.giphy.com/v1/gifs/trending?api_key=MQSBmMmfoEszsSvVN7w160xEVMqmPpvN&limit=8&rating=G';
const RANDOM_URL: string= 'https://api.giphy.com/v1/gifs/random?api_key=MQSBmMmfoEszsSvVN7w160xEVMqmPpvN&tag=INSTAG&rating=INSRAT'
@Injectable()
export class GiphService {

    constructor(private http: HttpClient) { }

    getTrending(GiphTrendingArray: GiphTrendingArray) {
        this.http.get(TRENDING_URL).subscribe(data => {
            var giphs: Array<Giph> = this.parseArray(data);
            GiphTrendingArray.updateTrending(giphs);
        });
    }

    getRandom(GiphRandom: GiphRandom, rating: string ,tag: string){
        this.http.get(RANDOM_URL.replace('INSTAG', tag).replace('INSRAT', rating)).subscribe(data => {
            GiphRandom.updateRandom(this.parseObject(data));
        });
    }

    parseObject(data: any): Giph {
        var giph;
        return {image: this.createURL(data.data.id)};
    }

    parseArray(data: any): Array<Giph>{
        var giphs = new Array<Giph>();

        data.data.forEach(giph => {
            giphs.push({image: this.createURL(giph.id)});
        });
        return giphs;
    }

    createURL(giphId: string): string{
        return 'https://i.giphy.com/media/' + giphId + '/giphy.gif';
    }
}
