import { generateItems } from "./utils";
import { NotificationProvider, ThemeProvider, UserProvider } from "./providers";
import { ComplexForm, Header, ItemList, NotificationSystem } from "./components";

const App: React.FC = () => {
	const items = generateItems(10000);

	return (
		<ThemeProvider>
			<NotificationProvider>
				<NotificationSystem />

				<UserProvider>
					<Header />
					<div className="container mx-auto px-4 py-8">
						<div className="flex flex-col md:flex-row">
							<div className="w-full md:w-1/2 md:pr-4">
								<ItemList items={items} />
							</div>
							<div className="w-full md:w-1/2 md:pl-4">
								<ComplexForm />
							</div>
						</div>
					</div>
				</UserProvider>
			</NotificationProvider>
		</ThemeProvider>
	);
};

export default App;
