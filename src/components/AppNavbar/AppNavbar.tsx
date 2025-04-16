import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';

import { Link, useLocation } from 'react-router-dom';

const navItems = [
	{ path: '/', label: 'Table' },
	{ path: '/list', label: 'List' },
];

export const AppNavbar = () => {
	const { pathname } = useLocation();

	return (
		<Navbar className="bg-slate-900 text-white">
			<NavbarBrand className={'text-lg font-bold text-orange-400'}>Meme Directory</NavbarBrand>

			<NavbarContent className={'gap-4'}>
				{navItems.map(({ path, label }) => {
					const isActive = pathname === path;

					return (
						<NavbarItem key={path} isActive={isActive}>
							<Link
								to={path}
								aria-current={isActive ? 'page' : undefined}
								className={`transition hover:text-orange-400 ${
									isActive ? 'text-orange-400 font-semibold' : ''
								} `}
							>
								{label}
							</Link>
						</NavbarItem>
					);
				})}
			</NavbarContent>
		</Navbar>
	);
};
