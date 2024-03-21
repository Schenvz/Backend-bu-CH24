function notFoundOne(one) {
  if (!one) {
    const error = new Error("There isn't documents");
    error.statusCode = 404;
    throw error;
  }
}

export default notFoundOne;
