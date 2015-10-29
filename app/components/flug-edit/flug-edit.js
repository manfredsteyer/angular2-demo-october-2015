var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var edit_dialog_1 = require('./../edit-dialog/edit-dialog');
var FlugEdit = (function () {
    function FlugEdit(params) {
        this.flug = {
            id: 17,
            von: 'Graz'
        };
        this.id = params.get('id');
        this.info = 'Flug: #' + this.id;
    }
    FlugEdit.prototype.save = function () {
        console.debug(this.flug.von);
    };
    FlugEdit = __decorate([
        angular2_1.Component({}),
        angular2_1.View({
            templateUrl: 'app/components/flug-edit/flug-edit.html',
            directives: [edit_dialog_1.EditDialog, angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams])
    ], FlugEdit);
    return FlugEdit;
})();
exports.FlugEdit = FlugEdit;
//# sourceMappingURL=flug-edit.js.map