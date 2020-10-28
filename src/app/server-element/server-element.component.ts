import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string}; //@Input() decorator used to expose this property to the parent components which implement server-element-component allowing for binding to this property
                                                                               // 'srvElement' is an alias to allow for a different naming convention outside of this scope. now this element may only be referenced as 'srvElement' outside the scope of this file
  constructor() { }

  ngOnInit(): void {
  }

}
