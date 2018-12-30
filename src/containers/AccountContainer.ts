import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../reducers";
import AccountPage from "../components/AccountPage";

const mapStateToProps = (state: State) => {
    return {
        email: state.account.email,
        admin: state.account.admin
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountPage)
