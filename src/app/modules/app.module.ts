import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { HeaderModule } from "../components/header/header.module";
import { MatSliderModule } from "@angular/material/slider";
import { AppService } from "../services/app.service";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "../app-routing.module";
import { HeaderComponent } from '../components/header/header.component';
import { HomeModule } from "../components/home/home.module";
import { ProfileModule } from "../components/profile/profile.module";
import { SidebarModule } from "../components/sidebar/sidebar.module";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { BranchesModule } from "../components/branches/branches.module";
import { EventsModule } from "../components/events/events.module";
import { ListsModule } from "../components/lists/lists.module";
import { SettingsModule } from "../components/settings/settings.module";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HeaderModule,
		MatSliderModule,
		HttpClientModule,
		HomeModule,
		ProfileModule,
		SidebarModule,
		BranchesModule,
		EventsModule,
		ListsModule,
		SettingsModule
	],
	providers: [
		AppService
	],
	bootstrap: [
		AppComponent,
		HeaderComponent,
		SidebarComponent
	],
	exports: []
})
export class AppModule { }
