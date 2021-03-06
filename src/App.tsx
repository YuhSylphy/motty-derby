import React, { useEffect, useMemo, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Family } from './features/family/Family';
import { Http404 } from './features/errors/404';
import {
	AppBar,
	Box,
	Drawer,
	IconButton,
	Link as Anchor,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	useTheme,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
	List as ListIcon,
	MenuOutlined,
	Timeline as TimelineIcon,
	ChangeHistory as ChangeHistoryIcon,
} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { horseDefsActions } from './features/horse-defs';
import { MareLine } from './features/mare-line';
import { Indicator } from './features/indicator';
import { PedigreeDialog } from './features/pedigree';
import { ChangeLog } from './features/changelog';

import './App.css';

type MenuItemDef = {
	icon: JSX.Element;
	label: string;
	path: string;
	page: JSX.Element;
};

const renderListItem = (def: MenuItemDef) => {
	return (
		<ListItem key={def.path} button={true} component={Link} to={def.path}>
			<ListItemIcon>{def.icon}</ListItemIcon>
			<ListItemText primary={def.label} />
		</ListItem>
	);
};

const defs: MenuItemDef[] = [
	{
		icon: <ListIcon />,
		label: '牝系図',
		path: '/mare-line',
		page: <MareLine />,
	},
	{
		icon: <TimelineIcon />,
		label: '家系図(旧)',
		path: '/family',
		page: <Family />,
	},
	{
		icon: <ChangeHistoryIcon />,
		label: '更新履歴',
		path: '/change-log',
		page: <ChangeLog />,
	},
];

const MenuList: React.FC<{
	toggleMenu: () => void;
}> = ({ toggleMenu }) => {
	return (
		<List onClick={toggleMenu} onKeyDown={toggleMenu}>
			{defs.map(renderListItem)}
		</List>
	);
};

const Header: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const toggleMenu = useMemo(
		() => () => {
			setMenuOpen(!menuOpen);
		},
		[menuOpen, setMenuOpen]
	);

	return (
		<React.Fragment>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={toggleMenu}
					>
						<MenuOutlined />
					</IconButton>
					<Typography variant="h6">MOTTV Derby</Typography>
					{/* <Button color="inherit">Login</Button> */}
				</Toolbar>
			</AppBar>
			<Drawer open={menuOpen} onClose={toggleMenu}>
				<MenuList toggleMenu={toggleMenu} />
			</Drawer>
		</React.Fragment>
	);
};

const Footer: React.FC = () => {
	const theme = useTheme();
	return (
		<Box display="flex" justifyContent="flex-end" margin={theme.spacing(0.2)}>
			<Anchor href="https://www.youtube.com/user/MOTTYGAMES/" target="__blank">
				MOTTV
			</Anchor>
		</Box>
	);
};

export const App: React.FC = () => {
	const theme = useTheme();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(horseDefsActions.init());
	}, [dispatch]);

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<React.Fragment>
				<Header />
				<Box margin={theme.spacing(0.5)}>
					<Switch>
						{defs.map(({ path, page }) => (
							<Route key={path} path={path}>
								{page}
							</Route>
						))}
						<Route exact path="/">
							<Redirect to="/mare-line" />
						</Route>
						<Route>
							<Http404 />
						</Route>
					</Switch>
				</Box>
				<Footer />
				<PedigreeDialog />
				<Indicator />
			</React.Fragment>
		</BrowserRouter>
	);
};
