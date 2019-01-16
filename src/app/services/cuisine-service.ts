import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CuisineService {

    onOrder = new EventEmitter<boolean>();
    openTab = new EventEmitter<string>();
}