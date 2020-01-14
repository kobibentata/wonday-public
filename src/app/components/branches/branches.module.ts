import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchesComponent } from './branches.component';

@NgModule({
	declarations: [BranchesComponent],
	imports: [
		CommonModule
	],
	exports: [
		BranchesComponent
	]
})
export class BranchesModule { }
