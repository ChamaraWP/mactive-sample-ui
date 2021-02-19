import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  @Output() openMenuHandler = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onOpenMenu(){
    this.openMenuHandler.emit(true)
  }

}
