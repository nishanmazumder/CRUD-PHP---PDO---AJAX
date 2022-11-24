for (let a = 1; a <= 15; a += 5) {
  for (let b = a; b < a + 5; b++) {
    document.write(b);
  }
  document.write("<br>");
}

document.write("<hr>");

for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= a; b++) {
    document.write(b);
  }

  document.write("<br>");
}

document.write("<hr>");

for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= a; b++) {
    document.write(a);
  }

  document.write("<br>");
}

document.write("<hr>");

for (let a = 5; a >= 1; a--) {
  for (let b = a; b >= 1; b--) {
    document.write(b);
  }
  // document.write(a)
  document.write("<br>");
}

document.write("<hr>");

for (let a = 5; a >= 1; a--) {
  for (let b = 1; b <= a; b++) {
    document.write(a);
  }
  document.write("<br>");
}

document.write("<hr>");
