import React from 'react';
import AuthContext from '../context/AuthContext';

function LoginPage() {
    const context = React.useContext(AuthContext);

    const onAddUsername = (obj) => {
        if(obj.username === "test" && obj.password === "test") {
            context.setUsername(context.username);
            context.setPassword(context.password);
            context.setIsLoggedIn(true);
            localStorage.setItem('user', JSON.stringify(context.isLoggedIn));
            console.log('Успешный вход')
        } else {
            console.log('некорректные данные');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onAddUsername({
            "username" : context.username,
            "password" : context.password
        });
    }

    return(
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input name="username" type="text"  value={context.username} onChange={e => context.setUsername(e.target.value)}/>
        <label htmlFor="password">password</label>
        <input type="password" name="password"  value={context.password} onChange={e => context.setPassword(e.target.value)}/>
        <input type="submit" value="Отправить" />
        {context.isLoggedIn ? <div>Привет</div> : <div>Пока</div>}
      </form>
    );
}

export default LoginPage;