function warnTheSheep(queue) {
  const i = queue.indexOf("wolf");
  if (i === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${
      queue.length - 1 - i
    }! You are about to be eaten by a wolf!`;
  }
}
