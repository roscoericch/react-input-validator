import React, { useState } from "react";
import { Button, Radio } from "antd";
import BackSpaceIcon from "./icons/BackSpaceIcon";
var Calculator = function () {
    var _a = useState(""), calc = _a[0], setCalc = _a[1];
    var _b = useState("0"), runtimeAns = _b[0], setRuntimeAns = _b[1];
    var _c = useState("Deg"), anglFunc = _c[0], setAnglFunc = _c[1];
    var handleButtonClick = function (value) {
        setCalc(function (prevInput) { return prevInput + value; });
    };
    var handleClear = function () {
        setCalc("");
    };
    var handleDelete = function () {
        setCalc(function (prevInput) { return prevInput.slice(0, -1); });
    };
    var handleCalculate = function () {
        try {
            var result = eval(calc
                .replaceAll("sin(", anglFunc === "Deg" ? "Math.sin(Math.PI / 180*" : "Math.sin(")
                .replaceAll("cos(", anglFunc === "Deg" ? "Math.cos(Math.PI / 180*" : "Math.cos(")
                .replaceAll("tan(", anglFunc === "Deg" ? "Math.tan(Math.PI / 180*" : "Math.tan(")
                .replaceAll("ln", "Math.log")
                .replaceAll("log", "Math.log10")
                .replaceAll("√", "Math.sqrt")
                .replaceAll("π", "Math.PI")
                .replaceAll("ANS", "".concat(runtimeAns))
                .replaceAll("^", "**")
                .replaceAll("%", "/100")
                .replaceAll("e^(", "Math.exp(")
                .replaceAll("E", "10**")).toString();
            setCalc(result);
            setRuntimeAns(result);
        }
        catch (error) {
            setCalc("Error");
        }
    };
    return (React.createElement("div", { className: "container" },
        React.createElement("span", { className: "screen" }, calc),
        React.createElement("div", { className: "btn-container" },
            React.createElement(Radio.Group, { options: [
                    { label: "Rad", value: "Rad" },
                    { label: "Deg", value: "Deg" },
                ], onChange: function (e) { return setAnglFunc(e.target.value); }, value: anglFunc, defaultValue: "Deg", optionType: "button", className: "radio-btn" }),
            React.createElement(Button, null, "x!"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("("); } }, "("),
            React.createElement(Button, { onClick: function () { return handleButtonClick(")"); } }, ")"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("%"); } }, "%"),
            React.createElement(Button, { onClick: handleClear }, "AC"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("sin("); } }, "sin"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("ln("); } }, "ln"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("7"); } }, "7"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("8"); } }, "8"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("9"); } }, "9"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("/"); } }, "\u00F7"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("π"); } }, "\u03C0"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("cos("); } }, "cos"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("log("); } }, "log"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("4"); } }, "4"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("5"); } }, "5"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("6"); } }, "6"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("*"); } }, "\u00D7"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("e^("); } }, "e"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("tan("); } }, "tan"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("√("); } }, "\u221A"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("1"); } }, "1"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("2"); } }, "2"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("3"); } }, "3"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("-"); } }, "\u2212"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("ANS"); } }, "ANS"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("E("); } }, "EXP"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("^"); } },
                "x",
                React.createElement("sup", null, "y")),
            React.createElement(Button, { onClick: function () { return handleButtonClick("0"); } }, "0"),
            React.createElement(Button, { onClick: function () { return handleButtonClick("."); } }, "."),
            React.createElement(Button, { icon: React.createElement(BackSpaceIcon, { className: "backspaceIcon" }), onClick: handleDelete, className: "!w-full" }),
            React.createElement(Button, { onClick: function () { return handleButtonClick("+"); } }, "+"),
            React.createElement(Button, { className: "!bg-[#066FA9]", onClick: handleCalculate, type: "primary" }, "="))));
};
export default Calculator;
//# sourceMappingURL=Calculator.js.map