import { useParams } from "react-router-dom";
import { OffersData } from "../Parts/OffersData";
import { PartHeader } from "../Elements/PartHeader";
import { useNavigate } from "react-router";
import "../Styles/HousePage.css";
export const HouseInfoPage = () => {
  const { houseId } = useParams();
  const currentOffer = OffersData[parseInt(houseId || "0", 10)];
  const navigate = useNavigate();
  if (!currentOffer) {
    return <div>Дом не найден</div>;
  }
  const ShowMainPage = () => {
    try {
      navigate(`/`);
    } catch (error) {
      console.log("Ошибка перехода:", error);
    }
  };

  return (
    <>
      
      <div className="HouseInfo">
        <PartHeader textColor="FFFFF5" color="CEE27E">
          {currentOffer.name}
        </PartHeader>
        <div
          className="HouseProfilePhoto"
          style={{
            backgroundImage: `url(${currentOffer.bcgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            alignContent: "end",
          }}
        >
          <button
            className="SumbBtn smaller"
            onClick={() =>
              navigate(`/#contactUs`, {
                state: {
                  houseNumber: currentOffer.id,
                  scrollToContactForm: true,
                },
              })
            }
          >
            Оставить заявку
          </button>
        </div>
        <div className="AboutHouse">
          {/* <img src={currentOffer.bcgUrl} alt="" className="HouseProfilePhoto" /> */}
          <div className="DiscriptionPart">
            <h2>Описание</h2>
            <p className="HouseDescription">{currentOffer.description}</p>
          </div>
          <hr className="Line" />
          <h2>Характеристики</h2>

          <div className="PropertiesPart">
            <div>
              • Площадь: {currentOffer.properties.scale}м2 <br />• Этажность:{" "}
              {currentOffer.properties.flors}этажа <br />• Материал:{" "}
              {currentOffer.properties.material} <br />• Крыша:{" "}
              {currentOffer.properties.roof} <br />• Количество комнат:{" "}
              {currentOffer.properties.rooms} <br />
            </div>
            <div>
              • Санузлы: {currentOffer.properties.bathrooms}м2 <br />• Гараж:{" "}
              {currentOffer.properties.garage} <br />• Участок:{" "}
              {currentOffer.properties.region} <br />• Коммуникации:{" "}
              {currentOffer.properties.conveniences} <br />
            </div>
          </div>

        </div>
        <p>ID: №{currentOffer.id}</p>
        <button onClick={ShowMainPage} className="CarouselButton1">
        ← Вернуться к каталогу
      </button>
      </div>
    </>
  );
};
