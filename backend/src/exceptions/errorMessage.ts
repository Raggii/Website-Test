export = class ErrorMessage {
  code: Number;
  message: String;

  constructor(code: Number, message: String) {
    this.code = code;
    this.message = message;
  }
};
