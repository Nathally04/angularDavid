import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Answer } from '../models/Answer';
import { GLOBAL } from './global';
/*import { Observable } from 'rxjs/Observable';*/

@Injectable()
export class EditService {
    public url;

    constructor (public http: Http){
        this.url= GLOBAL.url;
    }

}