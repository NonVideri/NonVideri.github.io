const { caesarCipher, symbolCipher, reverseCipher } = require("./encryptors.js");

// Encoding and decoding functions using encryptors
const encodeMessage = str => {
  const encrypted1 = reverseCipher(str);
  const encrypted2 = caesarCipher(encrypted1, 8);
  const encrypted3 = symbolCipher(encrypted2);
  return encrypted3;
};

const decodeMessage = str => {
  const decrypted1 = symbolCipher(str);
  const decrypted2 = caesarCipher(decrypted1, -8);
  const decrypted3 = reverseCipher(decrypted2);
  return decrypted3;
};

const handleInput = userInput => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  } else if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  } else {
    output = `Error: Provide a command argument — either "encode" or "decode".`;
  }

  process.stdout.write(output + "\n");
  process.exit();
};

process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);
