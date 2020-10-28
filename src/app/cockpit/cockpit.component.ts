import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  // newServerName = '';
  // newServerContent='';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  //COMPONENT LIFECYCLE BABY

  constructor() { } // runs at creation of the component

  ngOnInit(): void { // runs after the constructor
  }

  ngDoCheck() { // called during every change detection run
  }

  ngOnChanges() { // called after a bound input property changes
  }
  
  ngAfterContentInit() { // called after content (ng-content) has been projected into view
  }

  ngAfterContentChecked() { // called every time the projected content has been checked
  }

  ngAfterViewInit() { // called after the component's view (and child views) have been initialized
  }

  ngAfterViewChecked() { //called every time the view (and child views) have been checked
  }

  ngOnDestroy() { // called right before the component is about to be destroyed
  }

  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({blueprintName: nameInput.value, blueprintContent: this.serverContentInput.nativeElement.value});
  }
}
