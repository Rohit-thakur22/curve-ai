export const getDataApi = async () => {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const res = await fetch(
    "https://dev-api.conqt.com/api/product/Get-All-Products",
    requestOptions as any
  )
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => console.log("error", error));
  return res;
};
