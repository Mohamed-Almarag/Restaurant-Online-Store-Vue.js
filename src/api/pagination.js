export const paginateArray = (array, perPage, page) =>
  array.slice((page - 1) * perPage, page * perPage);

// ------------------------------------------------
// GET: Return Users
// ------------------------------------------------
mock.onGet("/apps/user/users").reply((config) => {
  // eslint-disable-next-line object-curly-newline
  const {
    q = "",
    perPage = 10,
    page = 1,
    // sortBy = 'id',
    // sortDesc = false,
    // role = null,
    // plan = null,
    // status = null,
  } = config.params;
  /* eslint-enable */
  /* eslint-enable  */

  // if (sortDesc) sortedData.reverse()
  // array

  return [
    200,
    {
      users: paginateArray(array, perPage, page),
      total: array.length,
    },
  ];
});
