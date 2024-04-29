import React from "react";
var ProgressValidator = function (_a) {
    var _b, _c;
    var rules = _a.rules, value = _a.value;
    var message = "";
    var progress = 0;
    var dividend = 100 / rules.length;
    rules === null || rules === void 0 ? void 0 : rules.forEach(function (e) {
        if (e.rule.test(value))
            progress = progress + dividend;
        else if (!message) {
            message = e === null || e === void 0 ? void 0 : e.message;
        }
    });
    var range = rules.reduce(function (accumulator, currentValue) {
        return accumulator + (currentValue.rule.test(value) ? dividend : 0);
    }, 0);
    return (React.createElement(React.Fragment, null, value && (React.createElement("div", { className: "validator" },
        React.createElement("span", { className: "validator flex gap" }, (_b = rules === null || rules === void 0 ? void 0 : rules.filter(function (e) { return e.rule.test(value); })) === null || _b === void 0 ? void 0 :
            _b.map(function (e, i) { return (React.createElement("progress", { key: i, className: "validator ".concat(range <= 30
                    ? "bg-red"
                    : range < 100
                        ? "bg-orange"
                        : "bg-green"), max: "100", value: (e === null || e === void 0 ? void 0 : e.rule.test(value)) ? "100" : "0" })); }), (_c = rules === null || rules === void 0 ? void 0 : rules.filter(function (e) { return !e.rule.test(value); })) === null || _c === void 0 ? void 0 :
            _c.map(function (e, i) { return (React.createElement("progress", { key: i, className: "validator ", max: "100", value: (e === null || e === void 0 ? void 0 : e.rule.test(value)) ? "100" : "0" })); })),
        React.createElement("p", { className: "validator text-[#252B33] text-[12px] font-[400]" }, message)))));
};
export default ProgressValidator;
//# sourceMappingURL=ProgressValidator.js.map