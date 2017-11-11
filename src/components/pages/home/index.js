import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from './home'
import Modules from '../../../redux/modules'

const homeModule = Modules.homeModule

const mapStateToProps = state => ({
  home: state.homeModule
})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({
      ...homeModule
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
