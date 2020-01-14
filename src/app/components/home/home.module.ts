import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { SharedModule } from "../../modules/shared.module";

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		SharedModule
	],
	exports: [HomeComponent]
})
export class HomeModule { }
