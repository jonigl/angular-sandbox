﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { List } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<List[]>(`${config.apiUrl}/lists`);
    }
}