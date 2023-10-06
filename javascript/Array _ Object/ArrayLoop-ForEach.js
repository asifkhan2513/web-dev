const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Transaction ${i + 1}: you deposite the ${movement}`);
  } else {
    console.log(
      `Transaction ${i + 1}: you withdrew the amount ${Math.abs(movement)}`
    );
  }
}

// for this problem easiest way
console.log("\n-------------------------------\n");
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Transaction ${i + 1}: you deposite the ${movement}`);
  } else {
    console.log(
      `Transaction ${i + 1}: you withdrew the amount ${Math.abs(movement)}`
    );
  }
});
