import { NgModule } from '@angular/core';
import { DndDraggable, DndHandle, DndList, DndNoDrag } from '../directives';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
var DndListModule = (function () {
    function DndListModule() {
    }
    DndListModule.ɵfac = function DndListModule_Factory(t) { return new (t || DndListModule)(); };
    DndListModule.ɵmod = i0.ɵɵdefineNgModule({ type: DndListModule });
    DndListModule.ɵinj = i0.ɵɵdefineInjector({ imports: [CommonModule] });
    return DndListModule;
}());
export { DndListModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DndListModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                ],
                exports: [
                    DndDraggable, DndHandle, DndList, DndNoDrag,
                ],
                declarations: [DndDraggable, DndHandle, DndList, DndNoDrag]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DndListModule, { declarations: [DndDraggable, DndHandle, DndList, DndNoDrag], imports: [CommonModule], exports: [DndDraggable, DndHandle, DndList, DndNoDrag] }); })();
//# sourceMappingURL=module.js.map