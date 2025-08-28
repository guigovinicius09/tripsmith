import baseConfig from "../../eslint.config.mjs";
import next from "eslint-config-next";

export default [
  ...baseConfig,
  ...next,
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Next já injeta React
      "react/no-unescaped-entities": "off",
    },
  },
];
