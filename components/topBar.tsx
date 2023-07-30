"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
const TopBar = () => {
  const pages = [
    { name: "HOME", url: "/home" },
    { name: "UPCOMING EVENTS", url: "/upcoming-events" },
    { name: "PAST EVENTS", url: "/past-events" },
    { name: "MOVIE SERIES", url: "/movie-series" },
    { name: "SUPPORT", url: "/support" },
    { name: "ABOUT", url: "/about/history" },
    { name: "JOIN US", url: "/join" },
  ];

  const aboutPages = [
    { name: "THANK YOU", url: "/about/thanks" },
    { name: "HISTORY", url: "/about/history" },
  ];

  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const [anchorElAboutNav, setAnchorElAboutNav] =
    React.useState<null | HTMLElement>(null);
  const handleOpenAboutNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAboutNav(event.currentTarget);
  };
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Avatar
              alt="logo"
              src="https://baccs.org/wp-content/uploads/2020/07/Logo-final.svg"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              anchorEl={anchorElNav}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Menu
                id="about-menu-appbar"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                anchorEl={anchorElAboutNav}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElAboutNav)}
                onClose={() => setAnchorElAboutNav(null)}
                sx={{
                  display: { xs: "block" },
                }}
              >
                {aboutPages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => {
                      router.push(page.url);
                    }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    router.push(page.url);
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            alt="logo"
            src="https://baccs.org/wp-content/uploads/2020/07/Logo-final.svg"
          />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={(e) => {
                  if (page.name !== "ABOUT") {
                    router.push(page.url);
                  } else {
                    handleOpenAboutNavMenu(e);
                  }
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopBar;
