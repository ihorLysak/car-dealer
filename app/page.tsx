'use client';

import Link from 'next/link';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { getYears, getNextButtonStyling } from '~/app/utils/utils';
import { CarMake } from './types/car-make.type';

export default function Filter() {
  const [carMakes, setCarMakes] = useState<CarMake[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [carMakeId, setCarMake] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const fetchCarMakes = async () => {
      try {
        const response = await fetch(
          'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
        );
        const data = await response.json();
        setCarMakes(['', ...data.Results]);
      } catch (error) {
        console.error('Error fetching car makes: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarMakes();
  }, []);

  const isNextButtonDisabled = useMemo(
    () => carMakeId === '' || year === '',
    [carMakeId, year]
  );

  const nextButtonStyling = getNextButtonStyling(isNextButtonDisabled);

  const yearOptions = getYears();

  const handleCarMakeChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setCarMake(event.target.value);
    },
    []
  );

  const handleYearChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setYear(event.target.value);
    },
    []
  );

  const handleLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (isNextButtonDisabled) {
        event.preventDefault();
      }
    },
    [isNextButtonDisabled]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5 flex flex-col w-9/12 items-end bg-white rounded-2xl  gap-5 md:flex-row md:w-auto">
      <div className="flex flex-col text-2xl w-full md:text-base">
        <label htmlFor="makes">Make:</label>
        <select
          className="w-full h-14 border-2 border-slate-300 rounded-xl md:h-10 md:w-44"
          name="makes"
          id="makes"
          value={carMakeId}
          onChange={handleCarMakeChange}
        >
          {carMakes.map((carMake) => {
            return (
              <option key={carMake.MakeId} value={carMake.MakeId}>
                {carMake.MakeName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col text-2xl w-full md:text-base">
        <label htmlFor="year">Year:</label>
        <select
          className="w-full h-14 border-2 border-slate-300 rounded-xl md:h-10 md:w-44"
          name="year"
          id="year"
          value={year as string}
          onChange={handleYearChange}
        >
          {yearOptions.map((yearOption) => {
            return (
              <option key={yearOption} value={yearOption}>
                {yearOption}
              </option>
            );
          })}
        </select>
      </div>
      <Link
        className={nextButtonStyling}
        href={`/result/${carMakeId}/${year}`}
        onClick={handleLinkClick}
      >
        Next
      </Link>
    </div>
  );
}
