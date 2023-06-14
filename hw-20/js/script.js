(function () {
  function fibonachi(n = 1) {
    const fibAr = [];
    if (n === 1) {
      return 0;
    }
    for (let i = 0; i <= n; i += 1) {
      if (i <= 1) {
        fibAr.push(i);
      } else {
        fibAr.push(fibAr[i - 1] + fibAr[i - 2]);
      }
    }
    return fibAr[n - 1];
  }
  console.log(fibonachi(11));
})();
