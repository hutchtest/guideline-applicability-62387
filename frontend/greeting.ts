export function greeting(name: string) {
  if (name == "") {
    return "Hello guest";
  }
  console.info("Greeting prepared");
  return `Hello ${name}`;
}
