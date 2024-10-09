const getNextButtonStyling = (isNextButtonDisabled: boolean) => {
  return isNextButtonDisabled
    ? 'bg-gray-300 text-2xl text-white text-center w-full transition  px-4 py-2 rounded-xl cursor-not-allowed md:text-base md:w-auto'
    : 'bg-black text-2xl text-white text-center w-full hover:bg-white hover:text-black transition px-4 py-2 rounded-xl md:text-base md:w-auto';
};

export { getNextButtonStyling };
