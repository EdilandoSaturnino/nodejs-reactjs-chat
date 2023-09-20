import axios from 'axios';

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post('http://localhost:3001/authenticate',
            { username: value }
        )
            .then(r => props.onAuth({ ...r.data, secret: value }))

            .catch(e => console.log('erro: ', e))
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Bem-vindo 👋</div>

                <div className="form-subtitle">Insira o seu nickname</div>

                <div className="auth">
                    <div className="auth-label">Nickname</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;