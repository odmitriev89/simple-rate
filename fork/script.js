function transform(a, b, c, x) {
  const result = {
    y: 0,
    v: 0,
    z: 0
  };
  const coefficient = x / (a + b + c);
  result.y = a * coefficient;
  result.v = b * coefficient;
  result.z = x - result.y - result.v;
  
  return result;
}
