
interface Product {
  name: string;
  apresentation: number;
  mlPerkg: number;
  price: number;
  weight: number;
  dose: number;
}

export const calculateValues = (product: Product) => {
  const { apresentation, mlPerkg, price, weight, dose } = product;

  if (apresentation === 0 || weight === 0 || mlPerkg === 0) {
    return {
      apresentation,
      mlPerkg,
      doseMl: 0,
      pricePerDose: 0,
      pricePerTreatment: 0,
    };
  }

  const doseMl = (weight * mlPerkg) / 100;
  const pricePerDose = (price / apresentation) * doseMl;
  const pricePerTreatment = pricePerDose * (dose || 1); 

  return { apresentation, mlPerkg, doseMl, pricePerDose, pricePerTreatment };
};

export const findCheapest = (products: Product[]) => {
  return products.reduce((cheapest, current) => {
      return calculateValues(current).pricePerTreatment < calculateValues(cheapest).pricePerTreatment ? current : cheapest;
  }).name;
};
