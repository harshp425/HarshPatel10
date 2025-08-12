// "use client"
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Link from 'next/link'
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const drawerWidth = 240;
// const navItems = ['Home', 'About Me', 'Education', "Experience", "Projects"];

// function Navbar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2, fontFamily: 'Lato', fontWeight: '900' }}>
//         Menu
//       </Typography>
//       <Divider />
//       <List >
//         {navItems.map((item) => (
//           <Link key={item} href={`#${item}`} passHref>
//             <ListItem key={item} disablePadding>
//               <ListItemButton sx={{ textAlign: 'center' }}>
//                 <ListItemText sx={{ fontFamily: 'Lato', fontWeight: '900' }} primary={item} />
//               </ListItemButton>
//             </ListItem>
//           </Link>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (

//     <Box sx={{ display: 'flex' }}>
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
//       <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet" />
//       <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet" />
//       <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
//       <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Signika+Negative:wght@300..700&display=swap" rel="stylesheet"></link>

//       <CssBaseline />
//       <AppBar component="nav" style={{ backgroundColor: "white", height: '75px' }}>
//         <Toolbar sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' }, fontFamily: 'Lato', fontWeight: '900', color: "#36454F" }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, alignContent: 'center', fontFamily: 'Fira Code', fontSize: '30px', fontWeight: '400', color: "#36454F" }}
//           >
//             <div>&lt;HP/&gt;</div>
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Link key={item} href={`#${item}`} passHref>
//                 <Button key={item} sx={{ color: "#36454F", padding: '14px', ":hover": {}, fontFamily: 'Fira Code' }}>
//                   &lt; {item} /&gt;
//                 </Button>
//               </Link>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>

//     </Box >
//   );
// }

// // Navbar.propTypes = {
// //   /**
// //    * Injected by the documentation to work in an iframe.
// //    * You won't need it on your project.
// //    */
// //   window: PropTypes.func,
// // };

// export default Navbar;
"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const drawerWidth = 280;
const navItems = ['Home', 'About Me', 'Education', "Experience", "Projects", "Gallery"];

// Function to get the correct href for each nav item
const getNavHref = (item) => {
  if (item === 'Gallery') {
    return '/gallery';
  }
  if (item === "Home") {
    return '/'
  }
  return `#${item}`;
};

// Styled Components for Modern Look
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  height: '80px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
    zIndex: -1,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#2D3748',
  fontFamily: "'Inter', 'Segoe UI', sans-serif",
  fontWeight: 500,
  fontSize: '15px',
  padding: '12px 20px',
  margin: '0 4px',
  borderRadius: '12px',
  textTransform: 'none',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
    transition: 'left 0.5s ease',
  },
  '&:hover': {
    backgroundColor: 'rgba(59, 130, 246, 0.08)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.15)',
    '&::before': {
      left: '100%',
    },
  },
  '&:active': {
    transform: 'translateY(0)',
  },
}));

const StyledLogo = styled(Typography)(({ theme }) => ({
  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  fontSize: '28px',
  fontWeight: 600,
  background: 'linear-gradient(135deg, #2660DE 40%, #82E675 60%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -2,
    left: 0,
    width: '0%',
    height: '2px',
    background: 'linear-gradient(135deg, #2660DE 40%, #82E675 60%)',
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: drawerWidth,
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
    backdropFilter: 'blur(20px)',
    border: 'none',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
}));

const StyledMobileButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '12px',
  margin: '4px 16px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    transform: 'translateX(8px)',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.15)',
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  color: '#4A5568',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    transform: 'rotate(90deg)',
  },
}));

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', py: 2 }}>
      <StyledLogo variant="h6" sx={{ my: 2, fontSize: '24px' }}>
        &lt;HP/&gt;
      </StyledLogo>
      <Divider sx={{
        background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
        height: '1px',
        border: 'none'
      }} />
      <List sx={{ mt: 2 }}>
        {navItems.map((item, index) => (
          <Link key={item} href={getNavHref(item)} passHref>
            <ListItem disablePadding sx={{
              animation: `slideIn 0.6s ease-out ${index * 0.1}s both`
            }}>
              <StyledMobileButton>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    color: '#2D3748'
                  }}
                />
              </StyledMobileButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        
        body {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
        }
      `}</style>

      <CssBaseline />
      <StyledAppBar
        component="nav"
        sx={{
          backgroundColor: scrolled
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(255, 255, 255, 0.1)',
          boxShadow: scrolled
            ? '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            : 'none',
        }}
      >
        <Toolbar sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          px: { xs: 2, sm: 4 }
        }}>
          <MenuButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </MenuButton>

          <StyledLogo
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              cursor: 'pointer',
              '&:hover': {
                animation: 'float 2s ease-in-out infinite'
              }
            }}
          >
            &lt;HP/&gt;
          </StyledLogo>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item, index) => (
              <Link key={item} href={getNavHref(item)} passHref>
                <StyledButton
                  sx={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'slideIn 0.6s ease-out both'
                  }}
                >
                  {item}
                </StyledButton>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </StyledAppBar>

      <nav>
        <StyledDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        >
          {drawer}
        </StyledDrawer>
      </nav>
    </Box>
  );
}

export default Navbar;