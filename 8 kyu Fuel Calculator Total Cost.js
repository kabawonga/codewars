const fuelPrice = (litres, pricePerLiter) =>
  litres >= 10
    ? +(litres * pricePerLiter - litres * 0.25).toFixed(2)
    : litres >= 8
    ? +(litres * pricePerLiter - litres * 0.2).toFixed(2)
    : litres >= 6
    ? +(litres * pricePerLiter - litres * 0.15).toFixed(2)
    : litres >= 4
    ? +(litres * pricePerLiter - litres * 0.1).toFixed(2)
    : +(litres * pricePerLiter - litres * 0.05).toFixed(2);
