const toFreud = (string) =>
  string
    ? string
        .split(" ")
        .map((el) => "sex")
        .join(" ")
    : "";
