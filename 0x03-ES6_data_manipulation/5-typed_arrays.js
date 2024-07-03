function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const view = new DataView(buffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  view.setInt8(position, value);

  return buffer;
}

try {
  const buffer = createInt8TypedArray(10, 5, 123);
  console.log(new Int8Array(buffer));
} catch (e) {
  console.error(e.message);
}

export default createInt8TypedArray;
