const Button = ({children, version, background, league, showList}) => {
  const backgroundStyles = {
    'background': `url(${background}), #fff`,
    'backgroundSize': 'contain',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center'
  }

  return (
    <button onClick={() => showList(league)} style={backgroundStyles} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary'
}

export default Button;
