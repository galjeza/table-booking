// get the restaurant of the current user

const handler = async (req, res) => {
  // get restaurant name from url query
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      name: parseInt(req.query.restaurantName)
    }
  });
  res.json(restaurant);
};
