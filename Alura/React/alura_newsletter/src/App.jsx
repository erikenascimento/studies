import Cabecalho from "./components/Cabecalho/Cabecalho";
import { useState } from "react";
import ArticleList from "./components/ArticleList/ArticleList";
import Form from "./components/Form/Form";

export default function App() {
	const [user, setUser] = useState();
	const hasUser = Boolean(user);
	return (
		<>
			<Cabecalho user={user} />;{hasUser && <ArticleList />}
			{hasUser || <Form onSubmit={setUser} />}
		</>
	);
}
