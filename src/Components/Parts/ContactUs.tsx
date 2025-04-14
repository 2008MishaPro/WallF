/* eslint-disable @typescript-eslint/no-explicit-any */
import { PartHeader } from "../Elements/PartHeader";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../Styles/ContactUs.css";
import { useLocation } from "react-router-dom";

const schema = yup.object().shape({
  fullName: yup.string().required("Введите ФИО"),
  houseNumber: yup
    .number()
    .typeError("Введите номер корректно")
    .required("Введите номер дома"),
  phone: yup
    .string()
    .matches(/^\+7\d{10}$/, "Введите корректный номер телефона")
    .required("Введите телефон"),
  email: yup.string().email("Некорректный email").required("Введите email"),
});

export const ContactUs = () => {
  const [formStatus, setFormStatus] = useState(false);
  const location = useLocation();
  const [initialHouseNumber, setInitialHouseNumber] = useState<number | null>(null);
  
  useEffect(() => {
    if (location.state?.houseNumber) {
      setInitialHouseNumber(location.state.houseNumber);
    }
  }, [location]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (location.state?.scrollToContactForm) {
      setTimeout(() => {
        const contactSection = document.getElementById('contactUs');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location.state]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = () => {
    setFormStatus(true);
  };
  const FormAccept = () => {
    return (
      <div className="FormAccept">
        <div className="FormAcceptContent">
          <div>
            <h2>Успех</h2>
            <p>Мы обработаем вашу заявку и свяжемся с вами в ближайшее время</p>
          </div>
          <button className="AcceptBtn" onClick={() => setFormStatus(false)}>
            Закрыть
          </button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (initialHouseNumber !== null) {
      setValue('houseNumber', initialHouseNumber);
    }
  }, [initialHouseNumber, setValue]);

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <PartHeader color = "F8F8F8" textColor="CEE27E" >Связаться с нами</PartHeader>

      <div className="form-container" id="contactUs">
        {formStatus !== false ? <FormAccept /> : null}
        <div className="form-box">
          <form onSubmit={handleSubmit(onSubmit)} className="SumbitCon">
            <div className="form-group">
              <div className="FullName FormAdapt">
                <label>ФИО</label>
                <input {...register("fullName")} placeholder="Введите ФИО" />
                <p className="error">{errors.fullName?.message}</p>
              </div>
              <div className="HouseId FormAdapt">
                <label>Номер дома</label>
                <input
                  inputMode="numeric"
                  {...register("houseNumber")}
                  placeholder="Введите номер дома"
                />
                <p className="error">{errors.houseNumber?.message}</p>
              </div>
            </div>

            <div className="form-group ">
              <div className="PhoneInp FormAdapt">
                <label>Телефон</label>
                <input
                  {...register("phone")}
                  placeholder="+7XXXXXXXXXX"
                  inputMode="tel"
                />
                <p className="error">{errors.phone?.message}</p>
              </div>
              <div className="EmailInp FormAdapt">
                <label>Электронная почта</label>
                <input
                  {...register("email")}
                  placeholder="example@mail.com"
                  inputMode="email"
                />
                <p className="error">{errors.email?.message}</p>
              </div>
            </div>
            <div className="BtnCon">
              <button className="SumbBtn" type="submit">
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


