const calculateAvgRating = reviews => {
  const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);

  const avgRating = totalRating === 0 ? ''
    : totalRating === 1 ? totalRating
      : parseFloat((totalRating / reviews?.length).toFixed(1)); // Fixed the error by converting the result to a float
  return {
    totalRating,
    avgRating
  }
}
export default calculateAvgRating;