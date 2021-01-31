import { RouterModule, Routes } from "@angular/router";
import { CatalogoComponent } from "./catalogo.component";

const routes: Routes = [{ path: '', component: CatalogoComponent }]

export const CatalogoRoutes = RouterModule.forChild(routes);