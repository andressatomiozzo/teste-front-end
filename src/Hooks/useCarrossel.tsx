import React from "react";

type ICarrossel = { [key: string]: unknown }[] | null | undefined;

const useCarrossel = (data: ICarrossel) => {
  const [indexAtual, setIndexAtual] = React.useState(0);
  const indexTotal = (data?.length ?? 0) - 3;

  const handleClick = (index: number) => {
    setIndexAtual((index + indexTotal) % indexTotal);
  };

  // const autoplayId = React.useRef<number | null>(null);

  // const stopAutoplay = React.useCallback(() => {
  //   if (autoplayId.current !== null) {
  //     window.clearInterval(autoplayId.current);
  //     autoplayId.current = null;
  //   }
  // }, []);

  // const startAutoplay = React.useCallback(() => {
  //   stopAutoplay();
  //   autoplayId.current = window.setInterval(() => {
  //     setIndexAtual((atual) => (atual + 1) % indexTotal);
  //   }, 5000);
  // }, [indexTotal, stopAutoplay]);

  // React.useEffect(() => {
  //   startAutoplay();
  //   return stopAutoplay();
  // }, [startAutoplay, stopAutoplay]);

  return { indexAtual, handleClick };
};

export default useCarrossel;
