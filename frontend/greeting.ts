export function greeting(name: string) {
  if (name == "") {
    return "Hello";
  }
  console.info("Preparing a greeting");
  return `Hello ${name}`;
}
