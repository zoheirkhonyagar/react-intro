const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`animal ${animal} fetch is not ok`);
  }

  return apiRes.json();
};

export default fetchBreedList;
