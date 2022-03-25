import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfilePage } from './edit-profile.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfilePage
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },  {
    path: 'change-avatar',
    loadChildren: () => import('./change-avatar/change-avatar.module').then( m => m.ChangeAvatarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfilePageRoutingModule {}
