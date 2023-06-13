
import getCars, { FilterProps } from '@/actions/getCars'
import CarCard   from '@/components/CarCard'
import Filter from '@/components/Filter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import ShowMore from '@/components/ShowMore'
import { fuels, yearsOfProduction } from '@/constants'

export default async function Home({ searchParams }: { searchParams: FilterProps }) {

  const cars: [] = await getCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || ''
  })

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto' id='discover'>

        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='font-extrabold text-4xl'>
            Car Catalogue
          </h1>
          <p>
            Explore the cars you might like
          </p>
        </div>

        <div className='mt-12 w-full flex justify-between items-center flex-wrap gap-5'>
          <SearchBar />

          <div className="flex justify-start flex-wrap items-center gap-2">
            <Filter 
              type="fuel"
              options={fuels}
            />
            <Filter 
              type="year"
              options={yearsOfProduction}
            />
          </div>
        </div>

        {cars.length !== 0 ? (
          <section>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
              {cars.map((car, i) => (
                <CarCard key={i} car={car} />
              ))}
            </div>
            <ShowMore 
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > cars.length}
            />
          </section>
        ) : (
          <div className='mt-16 flex justify-center items-center flex-col gap-2'>
            <h2 className='text-black font-bold text-xl'>Oops, no cars found</h2>
            <p>Please try again later</p>
          </div>
        )}

      </div>
    </main>
  )
}
