import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() user!:IUser
  @Output() userInfo = new EventEmitter();
  constructor(){}
  ngOnInit(): void {
    
  }
  getCurrentUserInfo()
  {
    this.userInfo.emit(this.user)
  }
  deleteUser()
  {
    this.userInfo.emit(this.user)
  }
}
