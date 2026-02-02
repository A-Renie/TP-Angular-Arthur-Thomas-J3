import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserList } from './components/user-list/user-list.component';
import { UserCard } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    UserList,
    UserCard
  ],
  imports: [
    SharedModule
  ],
  exports: [
    UserList
  ]
})
export class UserDemoModule {}
