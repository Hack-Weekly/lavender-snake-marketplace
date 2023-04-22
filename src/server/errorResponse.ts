const errorResponse = (code: number) => {
  const body = { error: "" };
  switch (code) {
    case 400:
      body.error = "Bad request.";
      break;
    case 401:
      body.error = "Unauthorized.";
      break;
    case 404:
      body.error = "Not found.";
      break;
    case 405:
      body.error = "Method not allowed.";
      break;
    case 500:
      body.error = "Internal server error.";
      break;
    default:
      body.error = "Not found.";
      break;
  }
  return body;
};

export default errorResponse;
