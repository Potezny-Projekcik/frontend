
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
import LanguageListItem from './LanguageListItem';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const {t} = useTranslation("LanguageSwitcher");
  return (
    <List 
      sx={{ width: '100%', maxWidth: 200, borderRadius: "10px",bgcolor: '#81d4fa'}}
      component="nav">
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon><LanguageIcon/></ListItemIcon> 
        <ListItemText primary={`${t("language")}`} sx={{textAlign: 'center'}}></ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <LanguageListItem langCode="en"/>
        <LanguageListItem langCode="pl"/>
        </List>
      </Collapse>
    </List>
  );
}

 
