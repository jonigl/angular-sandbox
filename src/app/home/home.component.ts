import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { List } from '../_models';
import { UserService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    list: List[];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(list => { 
            this.list = list; 
        });
    }
}