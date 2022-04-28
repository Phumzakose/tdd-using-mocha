function greet(name) {
  if (typeof name == "string" && name !== "") {
    return "Hello, " + name;
  } else if (typeof name == "number") {
    return "error";
  } else {
    return "Invalid input";
  }
}
