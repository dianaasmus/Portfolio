import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { StartscreenComponent } from './startscreen/startscreen.component';

const routes: Routes = [
  { path: '', component: StartscreenComponent },
  {path: 'imprint', component: ImprintComponent},
  {path: 'Legal-Notice', component: ImprintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
