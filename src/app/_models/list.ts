import {Event} from './event';
export class List {
    id: number;
    name: string;
    events: Event[];
    totalPages: number;
    numberOfElements: number;
    page: number;
    perPage: number;
    total: number;
}