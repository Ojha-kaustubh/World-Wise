import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ isLoading, cities }) {

    if (isLoading) {
        return <Spinner />;
    }

    if(!cities.length) return <Message message='add
    your first city on the map'/>
  
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityItem city={city} key={city.id} />
      })}
    </ul>
  );
}

export default CityList;
