import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('angular-hello-world-docker');

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('http://backend:8080/hello')
      .subscribe((data) => console.log(data));
  }
}
