import { PhoneCont, SocialLinks } from "../Elements/Components/Contacts";
import styles from "../Styles/Footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.footerMain} >
      <div className={styles.footerContainer}>
        <article>
          <h2>© 2025 WallFlower. Все права защищены.</h2>
          <p className={styles.footerDiscribe}>
            Данный материал является интеллектуальной собственностью компании и
            охраняется законодательством об авторском праве. Копирование,
            распространение, изменение и любое иное использование материалов без
            письменного разрешения правообладателя запрещено. WallFlower
            оставляет за собой право вносить изменения в контент, продукцию и
            услуги без предварительного уведомления. Все товарные знаки,
            упомянутые на данном сайте/материале, являются собственностью их
            владельцев.
          </p>
        </article>
        <div className={styles.moreInfo}>
          <SocialLinks className={styles.social}/>
          <PhoneCont className={styles.phoneFooter}/>
        </div>
      </div>
    </div>
  );
};
