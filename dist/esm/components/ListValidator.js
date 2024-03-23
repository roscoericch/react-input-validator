// @ts-ignore: Unused variable
import React from "react";
var ListValidator = function (_a) {
    var _b;
    var rules = _a.rules, value = _a.value;
    var state = false;
    rules.forEach(function (e) {
        if (state === true)
            state = e.rule.test(value);
    });
    if (state)
        return React.createElement(React.Fragment, null);
    return (React.createElement(React.Fragment, null, value &&
        (rules.length > 1 ? (React.createElement("ul", { className: "bg-white rounded-[5px] p-3 flex flex-col gap" }, rules === null || rules === void 0 ? void 0 : rules.map(function (e, i) { return (React.createElement("li", { key: i, className: "flex items-center justify-start gap" },
            React.createElement("span", { className: "round rounded-full ".concat(e.rule.test(value) ? "bg-green" : "bg-red") }),
            React.createElement("p", { className: "text-[#252B33] text-12 font-[400]" }, e === null || e === void 0 ? void 0 : e.message))); }))) : (React.createElement(React.Fragment, null, rules[0].rule.test(value) ? (React.createElement(React.Fragment, null)) : (React.createElement("p", { className: "text-[#d01837] text-[12px] font-[400]" }, (_b = rules[0]) === null || _b === void 0 ? void 0 : _b.message)))))));
};
export default ListValidator;
//# sourceMappingURL=ListValidator.js.map