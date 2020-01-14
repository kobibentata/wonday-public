import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EventsComponent } from "./components/events/events.component";
import { BranchesComponent } from "./components/branches/branches.component";
import { ListsComponent } from "./components/lists/lists.component";
import { SettingsComponent } from "./components/settings/settings.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "profile",
		component: ProfileComponent
	},
	{
		path: "settings",
		component: SettingsComponent
	},
	{
		path: "lists",
		component: ListsComponent
	},
	{
		path: "branches",
		component: BranchesComponent
	},
	{
		path: "events",
		component: EventsComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
