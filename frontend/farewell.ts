export function farewell(name: string) {
  if (name == "") {
    return "Goodbye guest";
  }
  console.info("Farewell prepared");
  return `Goodbye ${name}`;
}
