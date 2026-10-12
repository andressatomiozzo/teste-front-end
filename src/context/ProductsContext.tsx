import React from "react";

type IProduct = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

type IData = {
  success: boolean;
  products: IProduct[];
};

type IProductsContext = {
  data: IData | null;
  error: string | null;
  loading: boolean;
};

export const ProductsContext = React.createContext<IProductsContext | null>(null);

export const useProducts = () => {
  const productsPortal = React.useContext(ProductsContext);
  if (!productsPortal) throw new Error("useContext - productsPortal deve estar dentro de um Provider");
  return productsPortal;
};

export const ProductsPortal = ({ children }: React.PropsWithChildren) => {
  const [data, setData] = React.useState<IData | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const PRODUCTS_URL = "/products.json";

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        setData(null);
        const response = await fetch(PRODUCTS_URL);
        const json = await response.json();
        if (!response.ok) throw new Error(`Erro ao buscar produtos (status ${response.status})`);
        setData(json);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return <ProductsContext.Provider value={{ data, error, loading }}>{children}</ProductsContext.Provider>;
};
