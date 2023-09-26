import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-blog';
  posts: object[] = []

  constructor() { 
    this.posts = [
      {
        image: "https://neilpatel.com/wp-content/uploads/2019/08/fotos-de-aventura-parao-instagram.jpeg",
        title: "Lorem Ipsum is simply dummy text of the printing",
      },
      {
        image: "https://s2.glbimg.com/-cvTjMUkwcEmy2MhvlU-iD92Jes=/620x455/e.glbimg.com/og/ed/f/original/2019/07/29/photo-riaan-blog-1.jpg",
        title: "Lorem Ipsum is simply dummy text of the printing",
      },
      {
        image: "https://blog.emania.com.br/wp-content/uploads/2015/09/papers.co-ma57-rainy-city-nature-22-wallpaper.jpg",
        title: "Lorem Ipsum is simply dummy text of the printing",
      },
    ]
  }
}
