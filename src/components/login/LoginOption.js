import './login_option.css';

const LoginForm = () => {
    return (
      <div className="login__card">
        <div className="login__card-header">
          <h4>CAMP Account Login</h4> 
        </div>
        <div className="login__card-body">
          <div className="login__social-media">
            <div className="login__microsoft"></div>
            <div className="login__google"></div>
          </div>
          <div className="login__divider">
            <div className="login__left-line"></div>
            <span>OR</span>
            <div className="login__right-line"></div>
          </div>
          <div className="login__form">
            <form action="" method="post">
              <div class="login__form-row">
                <label for="email"></label>
                <input 
                  className="login__input-email"
                  name="email"
                  type="email"
                  placeholder="Registered email" />

                <label for="password"></label>
                <input
                  className="login__input-password"
                  name="password"
                  type="password"
                  placeholder="Your password"
                />
              </div>
              <div class="login__form-row">
                <button className="login__input-submit" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default LoginForm;