db.ubicaciones.find();
db.ubicaciones.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.ubicaciones.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
db.ubicaciones.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, address.zipcode: 1})
db.ubicaciones.find({ "borough": { $eq: "Bronx" } });
db.ubicaciones.find({ "borough": { $eq: "Bronx" } }).limit(5);
db.ubicaciones.find({ "borough": { $eq: "Bronx" } }).skip(5).limit(5);
db.ubicaciones.find({ "grades.score": { $gt: 90 } });
db.ubicaciones.find({ "grades.score": { $gt: 80, $lt: 4 } });
db.ubicaciones.find({ "address.coord": { $lt: -95.754168 } });
db.ubicaciones.find({ $and: [{ "cuisine": { $not: { $eq: "American " } }, "grades.score": { $gt: 70 }, "address.coord": { $lt: -65.754168 } }] });
db.ubicaciones.find({ "cuisine": { $not: { $eq: "American" } }, "grades.score": { $gt: 70 }, "address.coord": { $lt: -65.754168 } });
db.ubicaciones.find({ "cuisine": { $not: { $eq: "American" } }, "grades.score": { $gt: 70 }, "address.coord": { $lt: -65.754168 } });
db.ubicaciones.find({ "cuisine": { $not: { $eq: "American" } }, "grades.grade": { $eq: "A" }, "address.borough": { $not: { $eq: "Brooklyn" } } }).sort({ "cuisine": 1 });
db.ubicaciones.find({ "name": { $regex: /^Wil/ } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.ubicaciones.find({ "name": { $regex: /ces$/ } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.ubicaciones.find({ "name": { $regex: /Reg/ } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.ubicaciones.find({ $and: [{ "borough": { $eq: "Bronx" } }, { $or: [{ "cuisine": "American " }, { "cuisine": "Chinese" }] }] });
db.ubicaciones.find({ $or: [{ "borough": "Staten Island" }, { "borough": "Queens" }, { "borough": "Bronx" }, { "borough": "Brooklyn" }] }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.ubicaciones.find({ "borough": { $nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.ubicaciones.find({ "grades.score": { $lt: 10 } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.ubicaciones.find({ $and: [{ "cuisine": { $regex: /seafood/i } }, { "cuisine": { $not: { $regex: /american/i } } }, { "cuisine": { $not: { $regex: /chinese/i } } }, { "name": { $not: { $regex: /^Wil/ } } }] }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.ubicaciones.find({ $and: [{ "grades.grade": { $eq: "A" } }, { "grades.score": { $eq: 11 } }, { "grades.date": { $eq: { "$date": 1407715200000 } } }] }, { restaurant_id: 1, name: 1, "grades.grade": 1 });
db.ubicaciones.find({ $and: [{ "grades.1.grade": { $eq: "A" } }, { "grades.1.score": { $eq: 9 } }, { "grades.1.date": { $eq: { "$date": 1407715200000 } } }] }, { restaurant_id: 1, name: 1, "grades.grade": 1 });
db.ubicaciones.find({ $and: [{ "address.coord.1": { $gte: 42 } }, { "address.coord.1": { $lte: 52 } }] }, { restaurant_id: 1, name: 1, "address.street": 1, "address.coord": 1 })
db.ubicaciones.find({}).sort({ name: 1 })
db.ubicaciones.find({}).sort({ name: -1 })
db.ubicaciones.find({}).sort({ cuisine: 1, borough: -1 })
db.ubicaciones.find({ "address.street": { $exists: true } })
db.ubicaciones.find({ "address.coord": { $type: "double" } })
db.ubicaciones.find({ "grades.score": { $mod: [7, 0] } }, { restaurant_id: 1, name: 1, "grades.grade": 1 })
db.ubicaciones.find({ "name": { $regex: /mon/i } }, { name: 1, borough: 1, "address.coord": 1, cuisine: 1 });
db.ubicaciones.find({ "name": { $regex: /^Mad/ } }, { name: 1, borough: 1, "address.coord": 1, cuisine: 1 });