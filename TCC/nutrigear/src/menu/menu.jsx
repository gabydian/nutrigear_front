import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
//import AdbIcon from '@mui/icons-material/Adb';
import LogoNutri from '../assets/logo.png';
import './menu.css';
import './menu.js';
import { Link } from 'react-router-dom';

//const pages = ['Artigos', 'Cardápios', 'Indicações', 'Login'];
const pages = [ {'nome':'Inicio','link':'/'},
                {'nome':'Artigos','link':'/Artigos'}, 
                {'nome':'Cardápios','link':'/Cardapios'}, 
                {'nome':'Menu','link':'/Menus'}, 
                {'nome':'Cadastro','link':'/cadastro'}
                
              ]

const settingsin = [
      { nome: 'Perfil', link: '/perfil' },
      { nome: 'Logout', link: '/logar' },	
  ];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('usuarioCadastrado');
    localStorage.removeItem('Nome');
    localStorage.removeItem('Restricao');
    handleCloseUserMenu();
    window.location.href='/'
};

const usuarioCadastrado = localStorage.getItem('usuarioCadastrado') === 'true';

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
            
	       <div class="menu-sanduiche">
            <button class="menu-botao">
          <div class="menu-icone"></div>
            
          <div class="menu-icone"></div>
          
          <div class="menu-icone"></div>
            </button>
		    <nav class="menu-itens">
			<ul>
			    <li><a href="/">Início</a></li>
			    <li><a href="/artigos">Artigos</a></li>
			    <li><a href="/cardapios">Cardápios</a></li>
			    <li><a href="/menu">Menu</a></li>
			    <li><a href="/cadastro">Cadastro</a></li>
			</ul>
		    </nav>
		</div>                  

          <Typography
             variant="h6"
             noWrap
             component="a"
             href='/'
             sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }}>
             <img src={LogoNutri} className="logoNutri" width={50} alt="logo" />
           </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="conta do user atual"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit" >              
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              
              {pages.map((pagina) =>(              
                <MenuItem key={pagina.link} onClick={handleCloseNavMenu}>
                  <Typography href={pagina.link}  sx={{ textAlign: 'center' }}>{pagina.nome}</Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.nome}
                href={page.link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.nome}
              </Button>
            ))}
          </Box>
         {usuarioCadastrado && (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                <Avatar alt="User Anonimo" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settingsin.map((setting) => (
                <MenuItem key={setting.nome} onClick={setting.nome === 'Logout' ? handleLogout : handleCloseUserMenu}> {/* Adiciona handleLogout */}
                  <Typography sx={{ textAlign: 'center' }}>{setting.nome}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
