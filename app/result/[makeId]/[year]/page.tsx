import Link from 'next/link';
import { CarModel } from '~/app/types/car-model.type';
import { getYears } from '~/app/utils/utils';
import { CarModelCard } from '~/app/components/components';

export async function generateStaticParams() {
  const params = [];

  const response = await fetch(process.env.CAR_MAKES_URL as string);

  const data = await response.json();
  const carMakes = data.Results;

  const years = getYears();

  for (const carMake of carMakes) {
    for (const year of years) {
      params.push({
        makeId: carMake.MakeId.toString(),
        year,
      });
    }
  }

  return params;
}

type Properties = {
  params: { makeId: string; year: string };
};

export default async function Cars({ params }: Properties) {
  const { makeId, year } = params;

  const response = await fetch(
    `${process.env.API_BASE}/makeId/${makeId}/modelyear/${year}?format=json`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch car models');
  }

  const data = await response.json();
  const carModels: CarModel[] = data.Results;

  if (!carModels || carModels.length === 0) {
    return (
      <div className="p-5">
        <p>No car models found for the selected make and year.</p>
        <Link
          className="bg-black text-white hover:bg-white hover:text-black transition px-4 py-2 rounded-xl"
          href="/"
        >
          Change filters
        </Link>
      </div>
    );
  }

  console.log(carModels);
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center bg-white p-5 mx-5 rounded-2xl gap-5 md:self-end">
        <div className="flex flex-col">
          <span className="font-bold">make: {carModels[0].Make_Name}</span>
          <span className="font-bold">year: {year}</span>
        </div>
        <Link
          className="bg-black text-2xl text-white hover:bg-white hover:text-black transition px-4 py-2 rounded-xl md:text-base"
          href="/"
        >
          filters
        </Link>
      </div>
      <div className="w-full h-full p-5 grid auto-rows-[200px] gap-5 md:grid-cols-6 md:gap-1">
        {carModels.map((carModel) => {
          return <CarModelCard key={carModel.Model_ID} carModel={carModel} />;
        })}
      </div>
    </div>
  );
}
