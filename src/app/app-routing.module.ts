import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { StartscreenComponent } from './startscreen/startscreen.component';

/**
 * The `routes` array defines the application's routing configuration.
 * Each route maps a URL path to a component to be displayed.
 */
const routes: Routes = [
  { path: '', component: StartscreenComponent },
  { path: 'Imprint', component: ImprintComponent },
  { path: 'Data-protection', component: ImprintComponent },
];

/**
 * The `AppRoutingModule` module configures the application's routes and enables features like scroll position restoration and anchor scrolling.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }