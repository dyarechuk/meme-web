import { Route, Routes } from 'react-router';
import { HeroUIProvider, ToastProvider } from '@heroui/react';

import { AppNavbar } from '@/components/AppNavbar';
import { TablePage } from '@/pages/TablePage';
import { ListPage } from '@/pages/ListPage';

function App() {
	return (
		<HeroUIProvider locale="en-US">
			<ToastProvider />
			<div className="min-h-screen scrollbar-hide h-32 overflow-y-scroll">
				<AppNavbar />
				<main className="p-4">
					<Routes>
						<Route path="/" element={<TablePage />} />
						<Route path="/list" element={<ListPage />} />
					</Routes>
				</main>
			</div>
		</HeroUIProvider>
	);
}

export default App;
