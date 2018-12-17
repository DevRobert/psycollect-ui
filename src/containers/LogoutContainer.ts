import { connect } from "react-redux";
import { Dispatch } from "redux";
import { logout } from "../actions/Authentication";
import LogoutPage from "../components/LogoutPage";

const mapStateToProps = (state: any) => {
    return {}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutPage)
