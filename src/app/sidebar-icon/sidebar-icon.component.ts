import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-icon',
  templateUrl: './sidebar-icon.component.html',
  styleUrls: ['./sidebar-icon.component.scss']
})
export class SidebarIconComponent implements OnInit {

  text: string = 'tooltip 💡';

  constructor() { }

  ngOnInit(): void {
  }

}
