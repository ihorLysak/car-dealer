const getYears = (): string[] => {
  const currentYear = new Date(Date.now()).getFullYear();

  const yearOptions: string[] = [''];

  for (let year = 2015; year <= currentYear; year++) {
    yearOptions.push(year.toString());
  }

  return yearOptions;
};

export { getYears };
