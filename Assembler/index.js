const operators = require("./operators");
const mustache = require("Mustache");
const fs = require('fs');
const jp = require('jsonpath');


const documentTemplate = __dirname + '/mustache-templates/document.mustache';
const headStyleTemplate = __dirname + '/mustache-templates/head-style.mustache';

(function defineTemplateAssembler(global, factory) {
    if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
        factory(exports); // CommonJS
    } else if (typeof define === 'function' && define.amd) {
        define(['exports'], factory); // AMD
    } else {
        global.TemplateAssembler = {};
        factory(global.TemplateAssembler); // script, wsh, asp
    }
}(this, function templateAssemblerFactory(assembler) {

    assembler.conditionOperators = operators;

    assembler.render = function (mergeData, designData) {
        var template = fs.readFileSync(documentTemplate, 'utf8');
        var headStyles = fs.readFileSync(headStyleTemplate, 'utf8');

        var renderCondition = function () {
            //If conditions is not an array than return the defaultValue
            if (this.tests instanceof Array) {
                for (var i = 0, cnt = this.tests.length; i < cnt; i++) {
                    var condition = this.tests[i];

                    var predicate = condition.test;
                    var operatorPath = predicate.op;
                    var dataPath = predicate.data;

                    var operator = jp.value(operators, operatorPath);
                    var data = jp.value(mergeData, dataPath);

                    if (typeof operator === "function") {
                        var result = operator(data, predicate.val);
                        if (result) return condition.val;
                    }
                }
                return this.val === 0 ? 1 : this.val;

            };
            var val = this.toString();
            return val == 0 ? 1 : val;
        }

        var json = {
            fields: mergeData,
            design: designData,
            renderCondition: renderCondition
        }

        return mustache.render(template, json, {
            headStyle: headStyles
        });
    }

    return assembler;

}));
