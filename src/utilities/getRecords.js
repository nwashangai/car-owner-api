export default (Model, options, Op, limit, offset) => {
  const filters = {};

  if (options.start_year || options.end_year) {
    filters.car_model_year = {};
    if (options.start_year) {
      filters.car_model_year[Op.gte] = parseInt(options.start_year);
    }
    if (options.end_year) {
      filters.car_model_year[Op.lte] = parseInt(options.end_year);
    }
  }

  if (options.gender) {
    filters.gender =
      options.gender.charAt(0).toUpperCase() +
      options.gender.slice(1).toLowerCase();
  }

  if (options.countries) {
    filters.country = {
      [Op.in]: options.countries,
    };
  }

  if (options.colors) {
    filters.car_color = {
      [Op.in]: options.colors,
    };
  }

  return Model.findAll({
    limit,
    offset,
    where: filters,
    order: [["id", "ASC"]],
  });
};
