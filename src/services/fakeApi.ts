import { ApiQuote } from "../entities/quote";

const fetchQuote = async (): Promise<ApiQuote> => {

  const quotePromise: ApiQuote = await new Promise((resolve, reject) => {
    const randError = Math.ceil(Math.random() * 10) % 5;

    if (randError === 4) {
      setTimeout(
        () => reject('Ben elle va marcher beaucoup moins bien, forcément !'),
        1000
      );
    }

    setTimeout(
      () => resolve({
        title: 'Faire un flim sur le cyclimse',
        content: 'Surtout ne pas confondre la coquetterie et la classe',
      }),
      1500
    );
  });

  return quotePromise;
};

export default {
  fetchQuote,
};
