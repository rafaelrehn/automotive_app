import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detalhes/:id', component: DetailComponent },

];

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: WellcomeComponent },
//   {
//     path: 'dashboard', component: DashboardComponent,
//     children: [
//       { path: '', redirectTo: 'view', pathMatch: 'full' },
//       { path: 'view', component: DashviewComponent, data: { state: 'dashboard-view' } },
//       { path: 'empresa', component: EmpresaViewComponent, data: { state: 'dashboard-empresa' }  },
//       { path: 'usuarios/:id', component: UsuariosViewComponent, data: { state: 'dashboard-usuarios' }  },
//       { path: 'usuarios', component: UsuariosListComponent, data: { state: 'dashboard-usuarios' }  },
//       { path: 'veiculos/view', component: VeiculosViewComponent, data: { state: 'dashboard-veiculos-view' }  },
//       { path: 'veiculos/view/:id', component: VeiculosViewComponent, data: { state: 'dashboard-veiculos-view' }  },
//       { path: 'veiculos', component: VeiculosComponent, data: { state: 'dashboard-veiculos-view' }  },
//       { path: 'mensagens', component: NovasMensagensComponent, data: { state: 'dashboard-mensagens' }  },
//       { path: 'items-adicionais', component: ItemsAdicionaisComponent, data: { state: 'dashboard-items-adicionais' }  },
//       { path: 'financeiro', component: FinanceiroComponent, data: { state: 'dashboard-financeiro' }  }
//       // { path: 'mensagens', component: NovasMensagensComponent }
//     ]
//   },

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
