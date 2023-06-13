export const headers = {
  'X-RapidAPI-Key': 'dcbc879a96mshd3f8dbe552e4c45p1465fdjsn1265f315913c',
  'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}