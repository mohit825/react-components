function calcultateNumberOfPages(limit, total) {
  let totalPages = total / limit;
  let isExtra = total % limit;
  return isExtra ? Math.floor(totalPages) + 1 : totalPages;
}

export { calcultateNumberOfPages };
