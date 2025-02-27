interface Product {
    name: string;
    apresentation: number; 
    mlPerkg: number; 
    price: number; 
    weight: number;
  }
  
  export const calculateValues = (product: Product) => {
    const { apresentation, mlPerkg, price, weight } = product;
  
  
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
    const pricePerTreatment = pricePerDose * weight; 
  
    return { apresentation, mlPerkg, doseMl, pricePerDose, pricePerTreatment };
  };
  
  export const findCheapest = (products: Product[]) => {
    if (products.length === 0) return "Nenhum produto";
  
    let cheapest = products[0];
    let minPrice = calculateValues(products[0]).pricePerTreatment;
  
    for (const product of products) {
      const price = calculateValues(product).pricePerTreatment;
      if (price > 0 && price < minPrice) {
        minPrice = price;
        cheapest = product;
      }
    }
  
    return cheapest.name;
  };