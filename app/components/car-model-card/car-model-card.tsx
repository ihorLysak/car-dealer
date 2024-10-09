import { CarModel } from '~/app/types/types';
type Properties = {
  carModel: CarModel;
};

const CarModelCard: React.FC<Properties> = ({ carModel }: Properties) => {
  return (
    <div className="bg-white p-5 rounded-2xl">
      <span className="font-bold ">{carModel.Model_Name}</span>
    </div>
  );
};

export { CarModelCard };
