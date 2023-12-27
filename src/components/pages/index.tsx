import { useEffect, useState } from "react";
import Product from "./product-section/Product";
import { getDataApi } from "../../features/fetchdata";

const Index = () => {
  const [productList, setProductList] = useState<any>([]); // state to store product data

  //* side effect to fetch data from api-handler
  useEffect(() => {
    (async () => {
      const res: any = await getDataApi();
      setProductList([...res.data]);
    })(); // IIFE to call handle  get request
  }, []);

  return <Product products={productList} />;
};

export default Index;
