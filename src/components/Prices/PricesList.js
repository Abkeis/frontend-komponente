import Info from "../../images/Info.svg";

export const PricesList = ({ prices }) => {
  // const [currentExperience, setModalOpen] = useState(false);
  return (
    <div className="prices-details">
      {prices.map((price, i) => {
        return (
          <div key={i} className="columns is-mobile">
            <div className="column is-narrow" title={price.info}>
              <Info />
            </div>

            <div className="column">
              <h2 className="price-name">{price.name}</h2>
            </div>
            <div className="column">
              <p className="price">{price.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
