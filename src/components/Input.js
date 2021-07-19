const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        id={name}
        className="form-control"
        style={{ marginBottom: 20 }}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
