
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const {t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 200, borderRadius: "10px",bgcolor: '#81d4fa'}}
      component="nav"
    >
      <ListItemButton 
        onClick={() => setOpen(!open)}
         sx={{borderRadius: "10px"}} >
        <ListItemIcon>
        <LanguageIcon/>
        </ListItemIcon> 
        <ListItemText primary="Language"/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{pl: 4 ,bgcolor: '#b3e5fc'}} onClick={() => handleLanguageChange('en')}>
            <ListItemText primary="English" sx={{ textAlign: 'center'}}
            primaryTypographyProps={{ fontWeight: i18n.language === 'en' ? 'bold' : 'inherit'}}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4,bgcolor: '#b3e5fc'}} onClick={() => handleLanguageChange('pl')}>
            <ListItemText primary="Polish" sx={{ textAlign: 'center'}}
            primaryTypographyProps={{ fontWeight: i18n.language === 'pl' ? 'bold' : 'inherit'}}/>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

 