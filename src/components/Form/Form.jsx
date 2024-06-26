const Form = ({ onSubmit }) => {

    const safeSubmit = event => {

        event.preventDefault();
        event.stopPropagation();

        const name = event.target[0].value;
        const email = event.target[1].value;

        onSubmit({name, email});
    }

    return <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
        <h1 className="header-form">Alura Newsletter</h1>
        <input className="alura-input" type="text" required  placeholder="Insira seu nome..." />
        <input className="alura-input" type="email" required placeholder="Insira seu e-mail..." />
        <button type="submit" className="alura-button">Seguir</button>
    </form>
}

export default Form;