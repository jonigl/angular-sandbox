import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestPage } from '../_models';

@Injectable({ providedIn: 'root' })
export class ListService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<RestPage>(`${config.apiUrl}/lists`);
    }
}