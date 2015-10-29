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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var flug_service_1 = require('./../../services/flug-service');
var show_error_1 = require('./../../validation/show-error');
var city_validator_1 = require('./../../validation/city-validator');
var FlugSuchen = (function () {
    function FlugSuchen(flugService) {
        this.von = "Graz";
        this.nach = "Hamburg";
        this.fluege = [];
        this.flugService = flugService;
    }
    FlugSuchen.prototype.suchen = function () {
        var _this = this;
        this.flugService
            .find(this.von, this.nach)
            .subscribe(function (r) {
            _this.fluege = r;
            _this.message = r.length + " Flüge geladen";
        });
    };
    FlugSuchen.prototype.select = function (flug) {
        this.selectedFlug = flug;
    };
    FlugSuchen = __decorate([
        angular2_1.Component({
            selector: 'flug-suchen'
        }),
        angular2_1.View({
            templateUrl: 'app/components/flug-suchen/flug-suchen.html',
            directives: [angular2_1.NgIf, angular2_1.NgFor, angular2_1.FORM_DIRECTIVES, show_error_1.ShowError, city_validator_1.CityValidator, router_1.ROUTER_DIRECTIVES]
        }),
        __param(0, angular2_1.Inject(flug_service_1.FlugService)), 
        __metadata('design:paramtypes', [Object])
    ], FlugSuchen);
    return FlugSuchen;
})();
exports.FlugSuchen = FlugSuchen;
//# sourceMappingURL=flug-suchen.js.map