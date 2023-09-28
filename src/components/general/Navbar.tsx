import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import ElevationScroll from "./ElevationScroll"
import { useRouter } from 'next/router';
import CustomStyles from '@/styles/general/Navbar';
import Link from 'next/link';


const drawerWidth = 240;
const navItems = [
    { link: '/shop', text: "Shop" },
    { link: '/recipes', text: "Recipes" },
    { link: '/about', text: "About" },
    { link: '/learn', text: "Learn" },
    { link: '/blog', text: "Blog" },
];

const headerItems = [
    { link: '/categories', text: "Categories" },
    { link: '/collections', text: "Collections" },
    { link: '/resources', text: "Resources" },
]

function DrawerAppBar(props: any) {
    const location = useRouter()
    const theme = useTheme()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const isPathActive = (path: any) => {
        return location.pathname.startsWith(path);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const activeLink = {
        color: `${theme.palette.primary.dark}`,
        borderBottom: `2px solid ${theme.palette.primary.dark}`,
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <CustomStyles.WrapperLink href="/">
                <CustomStyles.Logo src="/images/chimpanzee-48.png" width={200} height={50} priority alt="Scentronix test logo" sx={{ mt: 2, mb: 1 }} />
            </CustomStyles.WrapperLink>
            <Divider />
            <List>
                {[...navItems, ...headerItems].map((item) => (
                    <ListItem className="routerLink" component={Link}
                        href={item.link} key={item.text}
                        disablePadding sx={{ pl: 6, pr: 3 }}
                        style={isPathActive(item.link) ? activeLink : {}}
                    >
                        <ListItemButton sx={{ textAlign: 'left' }}>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box id="back-to-top-anchor">
            <ElevationScroll {...props}>
                <CustomStyles.Appbar>
                    <CustomStyles.AppBarWrapper>
                        <IconButton
                            color="secondary"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 1, display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <CustomStyles.WrapperLink href="/">
                            <CustomStyles.CustomLogo src="/images/chimpazee-200.png" width={90} height={94} priority alt="Scentronix test logo" />
                        </CustomStyles.WrapperLink>
                        <CustomStyles.AppBarLinkBox>
                            {navItems.map((item) => (
                                <CustomStyles.AppbarLink key={item.text} href={`${item.link}`}
                                    style={
                                        isPathActive(item.link) ? activeLink : {}
                                    }
                                >
                                    <CustomStyles.AppLinkText
                                        variant="subtitle1"
                                    >
                                        {item.text}
                                    </CustomStyles.AppLinkText>
                                </CustomStyles.AppbarLink>
                            ))}
                        </CustomStyles.AppBarLinkBox>
                    </CustomStyles.AppBarWrapper>
                </CustomStyles.Appbar>
            </ElevationScroll>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

            <CustomStyles.HeaderSection>
                <Container>
                    <CustomStyles.AppBarLinkBox>
                        {headerItems.map((item) => (
                            <CustomStyles.AppbarLink key={item.text} href={`${item.link}`}
                                style={
                                    isPathActive(item.link) ? activeLink : {}
                                }
                            >
                                <CustomStyles.AppLinkText variant="subtitle2">
                                    {item.text}
                                </CustomStyles.AppLinkText>
                            </CustomStyles.AppbarLink>
                        ))}
                    </CustomStyles.AppBarLinkBox>
                </Container>
            </CustomStyles.HeaderSection>
        </Box >
    );
}

export default DrawerAppBar;