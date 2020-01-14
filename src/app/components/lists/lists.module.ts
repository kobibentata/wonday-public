import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import { SharedModule } from "../../modules/shared.module";

@NgModule({
	declarations: [ListsComponent],
	imports: [
		CommonModule,
		SharedModule
	],
	exports: [
		ListsComponent
	]
})
export class ListsModule { }
