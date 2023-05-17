import BarLoader from 'react-spinners/BarLoader';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selectors';

export const Loader = () => {
  const isLoading = useSelector(getIsLoading);
  return (
    <BarLoader
      color="#409bfc"
      cssOverride={{}}
      height={6}
      loading={isLoading}
      width={300}
    />
  );
};
