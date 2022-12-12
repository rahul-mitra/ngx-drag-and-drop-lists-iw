import { Injectable } from '@angular/core';
import { ALL_EFFECTS } from '../index';
import * as i0 from "@angular/core";
var DndState = (function () {
    function DndState() {
        this.dragState = {
            isDragging: false,
            itemType: undefined,
            dropEffect: 'none',
            effectAllowed: ALL_EFFECTS[0],
        };
    }
    DndState.prototype.filterEffects = function (effects, effectAllowed) {
        if (effectAllowed === void 0) { effectAllowed = "all"; }
        if (effectAllowed === 'all')
            return effects;
        return effects.filter(function (effect) {
            return (effectAllowed === null || effectAllowed === void 0 ? void 0 : effectAllowed.toLowerCase().indexOf(effect)) !== -1;
        });
    };
    DndState.ɵfac = function DndState_Factory(t) { return new (t || DndState)(); };
    DndState.ɵprov = i0.ɵɵdefineInjectable({ token: DndState, factory: DndState.ɵfac, providedIn: 'root' });
    return DndState;
}());
export { DndState };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DndState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=DndState.js.map