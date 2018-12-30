import { connect } from "react-redux";
import LoginPage from "../components/LoginPage";
import { Dispatch } from "redux";
import { login } from "../actions/Authentication";
import { State } from "../reducers";

const mapStateToProps = (state: State) => {
    return {
        info: state.login.info,
        error: state.login.error
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        login: (email: string, password: string) => {
            dispatch(login(email, password) as any)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)
