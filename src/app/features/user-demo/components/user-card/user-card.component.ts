import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  standalone: false
})
export class UserCard {
  @Input() user!: User;
  @Output() userSelected = new EventEmitter<User>();

  onCardClick(): void {
    console.log(this.user.name);
  }

  onSelect(event: Event): void {
    event.stopPropagation();
    this.userSelected.emit(this.user);
  }
}
