import { useEffect } from 'react';



export default function Error() {
	useEffect(() => {
		document.title = 'Argent Bank - Erreur 404';
	}, []);

	return (
		<main className='error'>
			<h2>404</h2>
			<p>La page que vous demandez n&apos;existe pas</p>
		</main>
	);
}