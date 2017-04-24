import {connect} from 'react-redux'
import {signup} from 'APP/app/reducers/auth'
import SignUpForm from 'APP/app/component/SignUp'

export default connect(
  state => ({}),
  {signup}
)(SignUp)
