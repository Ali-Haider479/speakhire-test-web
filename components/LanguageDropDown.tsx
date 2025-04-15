'use client';

import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Button,
  Popper,
  Fade,
  Paper,
  MenuList,
  MenuItem,
  ClickAwayListener,
} from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// Example languages
const languageData = [
  { langCode: 'en', langName: 'en' },
  { langCode: 'es', langName: 'es' },
];

// Extracts locale from pathname like /en/about
const extractLangFromPath = (path: string) => {
  const segments = path.split('/');
  return segments[1] || 'en'; // fallback to 'en' if undefined
};

const getLocalePath = (path: string, newLang: string) => {
  const segments = path.split('/');
  segments[1] = newLang;
  return segments.join('/');
};

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const pathName = usePathname();
  const lang = extractLangFromPath(pathName);

  const currentLang = languageData.find((l) => l.langCode === lang)?.langName ?? lang;

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        ref={anchorRef}
        onClick={handleToggle}
        endIcon={<KeyboardArrowDownOutlinedIcon sx={{color: '#064067' }} />}
        sx={{
          border: 1,
          borderRadius: 50,
          borderColor: '#064067',
          color: '#064067',
          textTransform: 'none',
          p:0,
          px: 1,
          fontSize:16,
          fontWeight:"bold"
        }}
      >
        {currentLang}
      </Button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        disablePortal
        className="z-[1] min-w-[160px]"
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'right top',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} onKeyDown={handleClose}>
                  {languageData.map((locale) => (
                    <MenuItem
                      key={locale.langCode}
                      component={Link}
                      href={getLocalePath(pathName, locale.langCode)}
                      onClick={handleClose}
                      selected={lang === locale.langCode}
                    >
                      {locale.langName}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default LanguageDropdown;
