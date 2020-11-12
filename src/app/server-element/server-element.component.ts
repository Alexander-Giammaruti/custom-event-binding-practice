import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // default state. no need to be expressed in code. can be overwritten as none to remove the functionality if desired
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy 
{
  @Input('srvElement') element: {type: string, name: string, content: string}; //@Input() decorator used to expose this property to the parent components which implement server-element-component allowing for binding to this property
                                                                               // 'srvElement' is an alias to allow for a different naming convention outside of this scope. now this element may only be referenced as 'srvElement' outside the scope of this file
  @Input() name: string;
  
  @ViewChild('heading') header: ElementRef;

  @ContentChild('contentParagraph') paragraph: ElementRef; // gain access to content within another component

//COMPONENT LIFECYCLE BABY

  constructor() { // runs at creation of the component
    console.log('constructor called');
   } 

  ngOnInit(): void { // runs after the constructor
    console.log('ngOnInit called');
    // console.log('Text Content:' + this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph: ' + this.paragraph);
  }

  ngDoCheck() { // called during every change detection run
    console.log('ngDoCheck called');
  }

  ngOnChanges(changes: SimpleChanges) { // called after a bound input property changes
    console.log('ngOnChanges called: ' + changes);
  }
  
  ngAfterContentInit() { // called after content (ng-content) has been projected into view
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() { // called every time the projected content has been checked
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() { // called after the component's view (and child views) have been initialized
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() { //called every time the view (and child views) have been checked
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() { // called right before the component is about to be destroyed
    console.log('ngDestroy called');
  }
}
