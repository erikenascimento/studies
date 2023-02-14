export default function Article({ title, text, tags, image, alt }) {
	return (
		<div className="alura-card">
			<h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">
				{title}
			</h3>
			<div className="w-full flex justify-end gap-2 pr-5 hidden sm:flex">
				{tags.map(tag => (
					<span key={tag} className="alura-tag">
						{tag}
					</span>
				))}
			</div>
			<div className="grid gap-1">
				{text.map((content, index) => (
					<p key={index} className="text-alura-200 dark:text-gray-300">
						{content}
					</p>
				))}
			</div>
			{image && <img src={image} />}
			{image && alt && <span className="sr-only">{alt}</span>}
		</div>
	);
}
