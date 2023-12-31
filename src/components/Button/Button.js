import css from './button.module.css'
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return (
    <button className={css.button} onClick={loadMore}>Load more</button>
  )
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired
}
