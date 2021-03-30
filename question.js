function shortestSubstring(s) {
  let arr = [];
  console.log(s.substr(0, 2));
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j + i < s.length; j++) {
      let sub = s.substr(i, j);
      if (sub.match("abcdef")) arr.push(sub);
    }
  }

  return arr;
}

shortestSubstring("iamajaysingh");
