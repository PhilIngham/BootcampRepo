import { validatePassword } from "./ValidatePassword";

describe("Validate Password", () => {
  it("Should return false if the password is empty", () => {
    expect(validatePassword("")).toBe(false);
  });

  it("Should return true when length of password is at least eight", () => {
    const password = "1234567a";

    expect(validatePassword(password)).toBe(true);
  });

  it("Should return false when password is only numbers", () => {
    const password = "12345678";
    expect(validatePassword(password)).toBe(false);
  });

  it("Should return false when password is only letters", () => {
    const password = "abcdefgh";
    expect(validatePassword(password)).toBe(false);
  });

  it("Should return false when only capital letters in password", () => {
    const password = "ABCDEFGH";
    expect(validatePassword(password)).toBe(false);
  });

  it("Should return false when length of password is less than eight", () => {
    expect(validatePassword("wd")).toBe(false);
  });
});
