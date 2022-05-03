import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articleCard: any[] = [
    {"id": 1,
    "title": "Human society under urgent threat from loss of Earth's natural life",
    "description": "Human society is in jeopardy from the accelerating decline of the Earth`s  natural life-support systems, the world’s leading scientists have warned, as they announced the results of the most thorough planetary health check ever undertaken.",
    "image": "../../../assets/img/dying.jpeg",
    "link": "https://www.theguardian.com/environment/2019/may/06/human-society-under-urgent-threat-loss-earth-natural-life-un-report"
    },
    {"id": 2,
    "title": "The 'Great Dying' Nearly Erased Life On Earth. Scientists See Similarities To Today",
    "description": "There was a time when life on Earth almost blinked out. The \"Great Dying,\" the biggest extinction the planet has ever seen, happened some 250 million years ago",
    "image": "../../../assets/img/life.jpeg",
    "link": "https://www.npr.org/2019/06/04/729341362/the-great-dying-nearly-erased-life-on-earth-scientists-see-similarities-to-today"
    },
    {"id": 3,
    "title": "The seemingly insatiable human tendency to consume is changing our planet and the life on it, but can we change our behaviour?",
    "description": "Asteroid impacts, supervolcano eruptions and climate change have all received the Hollywood treatment.",
    "image": "../../../assets/img/world.jpeg",
    "link": "https://www.bbc.com/future/article/20210520-could-humans-really-destroy-all-life-on-earth"
    },
    {"id": 4,
    "title": "We are destroying our own home’: UN report reveals nature crisis",
    "description": "A landmark UN report has laid bare humanity’s devastating impact on the natural world, detailing unprecedented rates of decline in biodiversity and nature on land, in the seas and in the sky.",
    "image": "../../../assets/img/sand.jpeg",
    "link": "https://www.aljazeera.com/news/2019/5/6/we-are-destroying-our-own-home-un-report-reveals-nature-crisis"
    },
  ];

  mainArticleTitle:string = "Pollution Prevention";
  mainArticleImage:string = "../../../assets/img/bannerimg.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
