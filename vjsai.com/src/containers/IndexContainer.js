/**
 * Created by vijay on 3/3/17.
 */
import Index from '../components/Index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/terminalActions';


const mapStateToProps  = (state) => ({
  commands: state.term.commands,
  history: state.term.history,
  prompt: state.term.prompt
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);


