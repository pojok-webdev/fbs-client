import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppconfService {
  server = 'http://localhost:2000'
  constructor() { }
}
