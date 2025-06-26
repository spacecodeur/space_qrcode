import QRCode from "react-qr-code";
import styles from "./qrcodePage.module.css";

const QRCodePage = ({ title, qrcodeLink, iconPath}) => {
  return (
    <>
        <div className={styles.headbloc}>
            <h1><img src={iconPath} alt={title} /> {title}</h1>
        </div>
        <div><QRCode value={qrcodeLink} /></div>
    </>
  );
};

export default QRCodePage;