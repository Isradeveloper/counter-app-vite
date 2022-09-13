import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle}) => {

  return (
    <>
      <h1 data-testid="test-title" >{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
    </>
  );
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  name: 'Isra Trujillo',
  subTitle: 'No hay subtitulo',
  title: 'No hay ningún titulo',
}

