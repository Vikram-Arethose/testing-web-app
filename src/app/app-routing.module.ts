import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bakery-search',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/login/start/start.module').then(m => m.StartPageModule)
  },
  {
    path: 'google-login',
    loadChildren: () => import('./pages/login/google-login/google-login.module').then(m => m.GoogleLoginPageModule)
  },
  {
    path: 'location-setting',
    loadChildren: () => import('./pages/login/location-setting/location-setting.module').then(m => m.LocationSettingPageModule)
  },
  {
    path: 'apple-registration',
    loadChildren: () => import('./pages/login/apple-registration/apple-registration.module').then(m => m.AppleRegistrationPageModule)
  },
  {
    path: 'email-registration',
    loadChildren: () => import('./pages/login/email-registration/email-registration.module').then(m => m.EmailRegistrationPageModule)
  },
  {
    path: 'bakery-search',
    loadChildren: () => import('./pages/bakery-search/bakery-search.module').then( m => m.BakerySearchPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'name',
    loadChildren: () => import('./pages/my-account/name/name.module').then(m => m.NamePageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./pages/my-account/email/email.module').then(m => m.EmailPageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./pages/my-account/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./pages/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
