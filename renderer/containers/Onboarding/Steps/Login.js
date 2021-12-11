import { connect } from 'react-redux'
import { Login } from 'components/Onboarding/Steps'
import { setUnlockWalletError, unlockWallet } from 'reducers/lnd'

const mapStateToProps = state => ({
  unlockWalletError: state.lnd.unlockWalletError,
})

const mapDispatchToProps = {
  setUnlockWalletError,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
