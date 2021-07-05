const ErrorModel = (props) => {
  if (props.error) {
    return (
      <div className="row">
        <div className="col">
          <div className="alert-danger p-2 mb-2 rounded">{props.error}</div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ErrorModel;
