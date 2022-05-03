import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutCard: any[] = [
    {
    "id": 1,
    "title": "Tree Planting",
    "description": "Being in touch with nature is a wonderful way to enjoy many health benefits. You can plant a tree, flowers, shrubs or seeds. You do not need a garden either because you can take part in tree planting programs.",
    "image": "../../../assets/img/tree-planting.png",
    "link": ""
    },
    {
    "id": 2,
    "title": "Community Cleanup",
    "description": "Organizing a neighborhood cleanup is a great way to do just that while also making your neighborhood a better place to live. Picking the right project to recruiting enough volunteers, putting together an effective event takes effort.",
    "image": "../../../assets/img/community-cleanup.png",
    "link": ""
    },
    {
      "id": 3,
      "title": "Waste Mangement",
      "description": "The seminar aims to enhance the knowledge of field offices in providing quality technical assistance on solid waste management that is greatly needed by the local government units (LGUs) and other stakeholders within their areas of jurisdiction.",
      "image": "../../../assets/img/waste-management.png",
      "link": ""
    },
    {
      "id": 4,
      "title": "Seminars",
      "description": "We provide a regular forum for the conservation community to learn, discuss, network and inspire. The series seeks to advance the discussion of cutting edge research relating to critical topics in international conservation by featuring distinguished scientists from across the globe.",
      "image": "../../../assets/img/seminar.png",
      "link": ""
    },
  ];

  aboutpageTitle:string = "About";
  aboutpageImage:string = "../../../assets/img/waw.jpg";



  constructor() { }

  ngOnInit(): void {
  }

}
