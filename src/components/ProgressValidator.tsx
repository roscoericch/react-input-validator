import React from "react";
interface rule {
  rule: RegExp;
  message?: string | undefined;
}
const ProgressValidator = ({
  rules,
  value,
}: {
  rules: rule[];
  value: string;
}) => {
  let message: string | undefined = "";
  let progress = 0;
  const dividend = 100 / rules.length;
  rules?.forEach((e) => {
    if (e.rule.test(value)) progress = progress + dividend;
    else if (!message) {
      message = e?.message;
    }
  });
  const range = rules.reduce(
    (accumulator, currentValue) =>
      accumulator + (currentValue.rule.test(value) ? dividend : 0),
    0
  );
  return (
    <>
      {value && (
        <div className="validator">
          <span className="validator flex gap">
            {rules
              ?.filter((e) => e.rule.test(value))
              ?.map((e, i) => (
                <progress
                  key={i}
                  className={`validator ${
                    range <= 30
                      ? "bg-red"
                      : range < 100
                      ? "bg-orange"
                      : "bg-green"
                  }`}
                  max="100"
                  value={e?.rule.test(value) ? "100" : "0"}
                ></progress>
              ))}
            {rules
              ?.filter((e) => !e.rule.test(value))
              ?.map((e, i) => (
                <progress
                  key={i}
                  className={`validator `}
                  max="100"
                  value={e?.rule.test(value) ? "100" : "0"}
                ></progress>
              ))}
          </span>
          <p className="validator text-[#252B33] text-[12px] font-[400]">
            {message}
          </p>
        </div>
      )}
    </>
  );
};

export default ProgressValidator;
