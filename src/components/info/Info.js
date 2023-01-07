import PropTypes from 'prop-types';
import { InfoWrapper } from './style';

function Info(props) {
  const { children } = props;
  return (
    <InfoWrapper>
      {children}
    </InfoWrapper>
  );
}

Info.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Info;
