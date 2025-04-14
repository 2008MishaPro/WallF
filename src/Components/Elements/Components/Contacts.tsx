import tgIcon from "../../../assets/Img/UI/tg.png";
import ytIcon from "../../../assets/Img/UI/yt.png";
import vkIcon from "../../../assets/Img/UI/vk.png";

interface ContProps {
  isMobile?: boolean;
  className?: string;
  linkClassName?: string; 
}

export const PhoneCont = ({ isMobile = false, className }: ContProps) => {
  return (
    <div className={`PhoneMore ${isMobile ? `mobile` : ``} ${className || ''}`}>
      <p>Телефон: +88005553535</p>
    </div>
  );
};

export const SocialLinks = ({ 
  isMobile = false, 
  className,
  linkClassName
}: ContProps) => {
  return (
    <div className={`MoreContacts ${isMobile ? `mobileContacts` : ``} ${className || ''}`}>
      <a target="_blank" href="https://web.telegram.org/k/" className={linkClassName}>
        <img className={`MoreInfoImg ${linkClassName || ''}`} src={tgIcon} alt="tg icon" />
      </a>
      <a target="_blank" href="https://vk.com/" className={linkClassName}>
        <img className={`MoreInfoImg ${linkClassName || ''}`} src={vkIcon} alt="vk icon" />
      </a>
      <a target="_blank" href="https://www.youtube.com/" className={linkClassName}>
        <img className={`MoreInfoImg ${linkClassName || ''}`} src={ytIcon} alt="yt icon" />
      </a>
    </div>
  );
};