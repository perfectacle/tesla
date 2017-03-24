import TeslaWheels from 'components/TeslaWheels/TeslaWheels';
import {connect} from 'react-redux';
import {counterDefaultVal, changeWheel} from 'actions/teslaAction';

const mapStateToProps = state => ({
  value: state.config.wheels
});

const mapDispatchToProps = dispatch => ({
  handleChangeWheels: value => dispatch(changeWheel(value))
});

const TeslaWheelsContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaWheels);
export default TeslaWheelsContainer;
