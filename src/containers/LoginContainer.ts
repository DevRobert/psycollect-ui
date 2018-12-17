import { connect } from "react-redux";
import LoginPage from "../components/LoginPage";
import { Dispatch } from "redux";
import { login } from "../actions/Authentication";

const mapStateToProps = (state: any) => {
    return {
        info: state.login.info,
        error: state.login.error
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        login: (email: string, password: string) => {
            dispatch(login(email, password))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)
