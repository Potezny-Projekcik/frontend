import { useTranslation } from 'react-i18next';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function LanguageListItem({ langCode}) {

  const {t,i18n } = useTranslation("LanguageSwitcher");
  const handleLanguageChange = (lng) => {
   i18n.changeLanguage(lng);

  }
  return (
    <ListItemButton
      sx={{ pl: 4, bgcolor: 'white' }}
      onClick={() => handleLanguageChange(langCode)}
    >
      <ListItemText
        primary={t(langCode)}
        sx={{ textAlign: 'center' }}
        primaryTypographyProps={{
          fontWeight: i18n.language === langCode ? 'bold' : 'inherit',
        }}
      />
    </ListItemButton>
  );
}

export default LanguageListItem;