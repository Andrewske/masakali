import { useSelector } from 'react-redux';
import Package from './Package';

const Packages = () => {
  const packages = useSelector((state) => state.packages);
  return (
    <div className="template-packages">
      <h1>Special Packages</h1>
      <span className="template-packages-button">
        <span className="btn">Continue to checkout</span>
      </span>

      {Object.entries(packages).map(([k, v]) => (
        <Package
          key={k}
          name={k}
          title={packages[k].title}
          price={packages[k].price}
        />
      ))}
    </div>
  );
};

export default Packages;
