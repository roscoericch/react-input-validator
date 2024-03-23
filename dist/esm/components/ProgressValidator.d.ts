import React from "react";
interface rule {
    rule: RegExp;
    message?: string | undefined;
}
declare const ProgressValidator: ({ rules, value, }: {
    rules: rule[];
    value: string;
}) => React.JSX.Element;
export default ProgressValidator;
