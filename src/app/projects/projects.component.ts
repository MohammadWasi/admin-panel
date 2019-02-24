import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  createProject = false;

  constructor() { }

  ngOnInit() {
  }
  addProject() {
    this.createProject = true;
  }
  cancelEdit() {
    this.createProject = false;
  }

}
