// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end).
// The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

let arr = ["a:12345", "777:xyz"];

const swap = (array) => {
  array.forEach((str, i) => {
    array[i] = str.split(":");
  });

  array = array.map((arr, i) => {
    if (i + 1 < array.length) {
      const swapStr1 = arr[1];
      const swapStr2 = array[i + 1][1];
      arr[1] = swapStr2;
      array[i + 1][1] = swapStr1;
    }
    arr = arr.join(":");
    return arr;
  });
  return array;
};

arr = swap(arr);
