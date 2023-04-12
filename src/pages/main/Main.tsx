import BestSlider from "../../components/mainpart/BestSlider";
import BigImg from "../../components/mainpart/BigImg";
import Categories from "../../components/mainpart/Categories";
import Map from "../../components/mainpart/Map";
import Promo from "../../components/mainpart/Promo";
import Slider from "../../components/mainpart/Slider";

export default function Main() {

  return (
    <>
      <BigImg />
      <Promo/>
      <Categories />
      <Slider />
      <BestSlider />
      <Map />
    </>
  );
}
