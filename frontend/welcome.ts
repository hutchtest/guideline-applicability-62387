export function welcome(name: string) {
  if (name == "") {
    return "Welcome guest";
  }
  console.info("Welcome prepared");
  return `Welcome ${name}`;
}
