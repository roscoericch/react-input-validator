// @ts-ignore: Unused variable
import React from "react";
interface rule {
  rule: RegExp;
  message?: string | undefined;
}
const ListValidator = ({ rules, value }: { rules: rule[]; value: string }) => {
  let state = false;
  rules.forEach((e) => {
    if (state === true) state = e.rule.test(value);
  });
  if (state) return <></>;
  return (
    <>
      {value &&
        (rules.length > 1 ? (
          <ul className="validator bg-white rounded-[5px] p-3 flex flex-col gap">
            {rules?.map((e, i) => (
              <li key={i} className="validator flex items-center justify-start gap">
                <span
                  className={`validator round rounded-full ${
                    e.rule.test(value) ? "bg-green" : "bg-red"
                  }`}
                ></span>
                <p className="validator  text-[#252B33] text-12 font-[400]">
                  {e?.message}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <>
            {rules[0].rule.test(value) ? (
              <></>
            ) : (
              <p className="validator  text-[#d01837] text-[12px] font-[400]">
                {rules[0]?.message}
              </p>
            )}
          </>
        ))}
    </>
  );
};

export default ListValidator;
