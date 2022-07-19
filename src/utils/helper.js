export const formatPrice = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value / 100)
}
// formatter.format(2500); /* $2,500.00 */

export const getUniqueValue = (array, type) => {
  let unique = array.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}

// 2 hàm này cái thì thuộc cartContext , cái thì thuộc FilterContext

/*
Intl.NumberFormat vs Number.prototype.toLocaleString
A final note comparing this to the older .toLocaleString. They both offer essentially the same functionality. However, toLocaleString in its older incarnations (pre-Intl) does not actually support locales: it uses the system locale. So when debugging old browsers, be sure that you're using the correct version (MDN suggests to check for the existence of Intl). There isn't any need to worry about this at all if you don't care about old browsers or just use the shim.

Also, the performance of both is the same for a single item, but if you have a lot of numbers to format, using Intl.NumberFormat is ~70 times faster. Therefore, it's usually best to use Intl.NumberFormat and instantiate only once per page load. Anyway, here's the equivalent usage of toLocaleString:

(2500).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});  // $2500.00 
*/
