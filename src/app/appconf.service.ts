import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppconfService {
  server = 'localhost:2000'
  constructor() { }
}
