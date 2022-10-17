import './login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Login() {
    const login=[
        {
            title:'Facebook',
            icon:faFacebook
        },
        {
            title:'Số điện thoại',
            icon:faMobileScreen
        },
        {
            title:'Google',
            icon:faFacebook
        },

    ]
    return (
        <div className="login">
            <div className="login-img">
                <img src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png" alt="" />
            </div>
            <div className="login-table">
                <div className="login_contaniner">
                    <div className="login-header">
                        <p className="login_name active" >Đăng nhập</p>
                        <Link to="/register" className="login_name">Đăng kí</Link>
                    </div>
                    <div className="login-button">
                        {login.map((item,index)=>(
                            <div key={index} className="login_content">
                                <FontAwesomeIcon icon={item.icon} className="login-content-icon" />
                                <div className="login__title">
                                    <a href="" className="login__title-name">{item.title}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="login__acc">Hoặc đăng nhập bằng tài khoản của bạn</p>
                    <div className="login__acc-content">
                        <input type="text" className="login__acc-input" placeholder="Tên đăng nhập hoặc Email" />
                        <input type="password" className="login__acc-input" placeholder="Mật khẩu" />
                    <button className="login_btn">Đăng nhập</button>
                    </div>
                    <p className="login-help">Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với 
                            <a href="">Chính sách quy định của Foody</a>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Login;