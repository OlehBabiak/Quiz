import { useTranslation } from "react-i18next"
import './shared/i18n/i18n.js'
import i18next from "i18next";
import { LANGUAGES } from "./shared/constants/i18n/constants.js";


function App() {

  const {t} = useTranslation();


  return (
    <>
      <div>
        {t("Select Language")}
      </div>
      <div>{i18next.language}</div>
      <button disabled={i18next.language === LANGUAGES.EN} onClick={() => i18next.changeLanguage(LANGUAGES.EN)}>English</button>
      <button disabled={i18next.language === LANGUAGES.FR} onClick={() => i18next.changeLanguage(LANGUAGES.FR)}>French</button>
      <button disabled={i18next.language === LANGUAGES.DE} onClick={() => i18next.changeLanguage(LANGUAGES.DE)}>German</button>
      <button disabled={i18next.language === LANGUAGES.SP} onClick={() => i18next.changeLanguage(LANGUAGES.SP)}>Spanish</button>
    </>
  )
}

export default App
