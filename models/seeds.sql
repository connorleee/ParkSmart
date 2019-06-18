USE parkSmartDB;

INSERT INTO parkings (firstName, lastName, phone, email, house, street, city, state, zip, lat, lng, numSpaces, spacePrice, spaceType, photo)
VALUES ("Connor", "Lee", "4258764321", "connor@parksmart.com", 722, "11th Ave E", "Seattle", "Washington", 98102, 47.625996, -122.317685, 1, 100, "Carport", "https://www.probytes.net/wp-content/uploads/2018/01/2-768x552.jpg");

INSERT INTO parkings (firstName, lastName, phone, email, house, street, city, state, zip, lat, lng, numSpaces, spacePrice, spaceType, photo)
VALUES ("Hongiao", "Xiong", "2068764321", "Hongliao@parksmart.com", 1532, "E Spruce St", "Seattle", "Washington", 98122, 47.603652, -122.311478, 1, 75, "Assigned Parking", "https://www.probytes.net/wp-content/uploads/2018/01/4-1-768x615.png");

INSERT INTO parkings (firstName, lastName, phone, email, house, street, city, state, zip, lat, lng, numSpaces, spacePrice, spaceType, photo)
VALUES ("Kevin", "LeRoy", "5298764321", "Kevin@parksmart.com", 1323, "13th Ave S", "Seattle", "Washington", 98144, 47.590857, -122.316260, 2, 120, "driveway", "https://www.probytes.net/wp-content/uploads/2018/01/9-1-768x509.png");

INSERT INTO parkings (firstName, lastName, phone, email, house, street, city, state, zip, lat, lng, numSpaces, spacePrice, spaceType, photo)
VALUES ("Nursaid", "Saidmakhmudov", "4256542637", "Said@parksmart.com", 202, "Hayes St", "Seattle", "Washington", 98109, 47.634230, -122.353032, 1, 50, "Yard", "https://www.probytes.net/wp-content/uploads/2018/01/11-1.png");

INSERT INTO users (firstName, lastName, phone, email)
VALUES ("Connor", "Lee", "4258764321", "connor@parksmart.com");

INSERT INTO users (firstName, lastName, phone, email)
VALUES ("Hongiao", "Xiong", "2068764321", "Hongliao@parksmart.com");

INSERT INTO users (firstName, lastName, phone, email)
VALUES ("Kevin", "LeRoy", "5298764321", "Kevin@parksmart.com");

INSERT INTO users (firstName, lastName, phone, email)
VALUES ("Nursaid", "Saidmakhmudov", "4256542637", "Said@parksmart.com");
