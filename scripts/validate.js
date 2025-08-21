// validate.js
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const schema = require("../schemas/schema.json");
const data = require("../schemas/data.json");

// Inicializa o AJV
const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

const validate = ajv.compile(schema);
const valid = validate(data);

if (!valid) {
  console.error("❌ Dados inválidos:", validate.errors);
} else {
  console.log("✅ Dados válidos!");
}
