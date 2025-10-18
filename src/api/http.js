export async function fetchData(category) {
  const url = category
    ? "https://dog.ceo/api/breeds/image/random"
    : "https://api.thecatapi.com/v1/images/search";
  const response = await fetch(url);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error();
  }
  console.log(resData);
  if (category) {
    return resData.message;
  } else {
    return resData[0].url;
  }
}
