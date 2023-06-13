import axios from "axios";

import {headers} from '@/utils'

export type FilterProps = {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
  pageNumber?: number;
}

const getCars = async(filters: FilterProps) => {
  const { data } = 
    await axios.get('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', 
      { 
        params: { 
          model : filters?.model,
          make: filters?.manufacturer,
          year: filters?.year,
          limit: filters?.limit,
          fuel_type: filters?.fuel
        },
        headers: headers
      }
    )

  return data
}

export default getCars