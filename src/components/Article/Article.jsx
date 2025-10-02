const Article = ({ title, text, tags, image, alt }) => {
    const resolvedImage = image ? new URL(image, import.meta.env.BASE_URL).href : null;

    return <div className="alura-card">
        <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
        <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
            {
                tags.map(tag => <span key={tag} className="alura-tag">{tag}</span>)
            }
        </div>
        <div className="grid gap-1">
            {
                text.map((content, index) => <p key={index} className="text-alura-200 dark:text-gray-400 line-clamp-4 sm:line-clamp-none">{content}</p>)
            }
        </div>
        { resolvedImage && <img className="sm:p-4" src={resolvedImage} /> }
        { resolvedImage && alt && <span className="sr-only">{alt}</span> }
    </div>
}

export default Article
