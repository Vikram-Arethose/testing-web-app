import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/login/start/start.module').then(m => m.StartPageModule)
  },
  {
    path: 'confirm-code',
    loadChildren: () => import('./pages/login/confirm-code/confirm-code.module').then(m => m.ConfirmCodeModule)
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
    loadChildren: () => import('./pages/menu/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./pages/menu/privacy/privacy.module').then(m => m.PrivacyPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./pages/menu/inbox/inbox.module').then(m => m.InboxPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/menu/orders/orders.module').then(m => m.OrdersPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/menu/favorites/favorites.module').then(m => m.FavoritesPageModule)
  },
  {
    path: 'payment-methods',
    loadChildren: () => import('./pages/menu/payment-methods/payment-methods.module').then(m => m.PaymentMethodsPageModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./pages/menu/legal/legal.module').then(m => m.LegalPageModule)
  },
  {
    path: 'bakery',
    loadChildren: () => import('./pages/bakery-search/bakery/bakery.module').then(m => m.BakeryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
