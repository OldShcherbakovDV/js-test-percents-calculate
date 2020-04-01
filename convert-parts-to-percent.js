const MAX_INPUT_LENGTH = 1000000;
const COUNT_SYMBOLS_AFTER_POINT = 3;
const PERCENT_COF = 100;
const ZERO_PARTS_SUMM_RESULT = "100.000";

const ERROR_MESSAGE_ARGUMENT_IS_NOT_ARRAY =
  "Invalid input: argument is not array.";
const ERROR_MESSAGE_EXCEEDED_MAX_LENGTH =
  "Invalid input: exceeded array max length.";
const ERROR_MESSAGE_UNEXPECTED_DATA_IN_ARRAY =
  "Invalid input: unexpected data in array.";

const convertPartsToPercent = parts => {
  if (!Array.isArray(parts)) {
    throw new Error(ERROR_MESSAGE_ARGUMENT_IS_NOT_ARRAY);
  }
  if (parts.length > MAX_INPUT_LENGTH) {
    throw new Error(ERROR_MESSAGE_EXCEEDED_MAX_LENGTH);
  }

  const partsSumm = parts.reduce((summ, value) => {
    if (typeof value === "string" || typeof value === "number") {
      const number = Number(value);
      if (number !== NaN && number >= 0) {
        return summ + number;
      }
    }
    throw new Error(ERROR_MESSAGE_UNEXPECTED_DATA_IN_ARRAY);
  }, 0);

  return partsSumm
    ? parts.map(value =>
        ((value * PERCENT_COF) / partsSumm).toFixed(COUNT_SYMBOLS_AFTER_POINT)
      )
    : [ZERO_PARTS_SUMM_RESULT];
};

module.exports = convertPartsToPercent;
