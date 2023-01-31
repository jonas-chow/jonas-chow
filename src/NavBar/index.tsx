import React, { useEffect, useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PersonIcon from '@mui/icons-material/Person';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ConstructionIcon from '@mui/icons-material/Construction';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';

import { SvgIconComponent } from '@mui/icons-material';

type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    openWidth: string;
    closedWidth: string;
};

type MenuItem = {
  label: string,
  icon: SvgIconComponent,
  id: string,
};

const itemList: MenuItem[] = [
  { label: "About Jonas", icon: PersonIcon, id: "about" },
  { label: "Projects", icon: AutoAwesomeIcon, id: "projects" },
  { label: "Skills", icon: ConstructionIcon, id: "skills" },
  { label: "Experience", icon: WorkHistoryIcon, id: "experience" },
  { label: "Education", icon: SchoolIcon, id: "education" },
];

const NavBar = ({ isOpen, setIsOpen, openWidth, closedWidth }: Props) => {
  const theme = useTheme();
  const [currentId, setCurrentId] = useState<string>("about");

  const onScroll = (e: Event, items: {
    id: string,
    position: number,
  }[]) => {
    const window = e.currentTarget as Window;
    const currentPosition = window.scrollY;

    const possibleItems = items.filter(item => item.position <= currentPosition);
    const currentItem = possibleItems.reduce(
      (curr, next) => next.position >= curr.position ? next : curr,
      {
        id: "about",
        position: 0
      }
    );
    
    setCurrentId(currentItem.id);
  };

  useEffect(() => {
    const positions: {
      id: string,
      position: number,
    }[] = [];
    itemList.forEach(item => {
      const element = document.getElementById(item.id);
      if (!element) {
        return;
      }
      const position = element.offsetTop;
      positions.push({
        id: item.id,
        position: position,
      });
    })

    window.addEventListener('scroll', e => onScroll(e, positions));
    return () => {
      window.removeEventListener('scroll', e => onScroll(e, positions));
    };
  })

  return (
    <Drawer 
      variant="permanent" 
      open={isOpen} 
      transitionDuration={500} 
      PaperProps={{
        sx: {
          width: isOpen ? openWidth : closedWidth,
        }
      }}
    >
      {
        isOpen ? (
          <IconButton onClick={() => setIsOpen(false)} sx={{ justifyContent: "right", height: 50 }}>
            <ChevronLeftIcon htmlColor='white' />
          </IconButton>
        ) : (
          <IconButton onClick={() => setIsOpen(true)} sx={{ height: 50 }}>
            <MenuIcon htmlColor='white' />
          </IconButton>
        )
      }
      <List>
        {itemList.map(({ label, icon, id }) => (
          <ListItem key={label} disablePadding sx={{ display: "block", height: 50 }}>
            <ListItemButton href={"#" + id} sx={{ height: 50 }}>
              <ListItemIcon sx={{ justifyContent: "center" }}>
                <SvgIcon 
                  component={icon} 
                  sx={{ color: currentId === id ? theme.palette.text.secondary : "white" }} 
                />
              </ListItemIcon>
              {isOpen && (
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{ variant: "h3", color: currentId === id ? "textSecondary" : "white" }} 
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavBar;
