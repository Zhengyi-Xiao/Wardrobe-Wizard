const express = require('express')
const cors = require('cors')
const axios = require('axios');
const { urlService, WEATHER_API_KEY, IMAGE_SECRETE } = require('./secrete')
const { MongoClient, ObjectId } = require('mongodb')

const webapp = express()
webapp.use(cors())
webapp.use(
  express.urlencoded({
    extended: true
  })
)
webapp.use(express.json())

const port = 8000

webapp.get('/', (req, res) => {
  res.send('Hello World!')
})

webapp.get('/clothes', async (req, res) => {
  // Connect to MongoDB
  const client = new MongoClient(urlService)

  try {
    await client.connect()

    // Access the MongoDB collection where you stored the clothing data
    const collection = client.db('Wardrobe-Wizard').collection('clothes') // Replace with your collection name.

    // Query for all clothing items in the collection
    const allClothingItems = await collection.find({}).sort({ "time": -1 }).toArray()

    if (allClothingItems.length > 0) {
      res.json(allClothingItems)
    } else {
      res.status(404).json({ message: 'No clothing items found.' })
    }
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  } finally {
    client.close()
  }
})

webapp.get('/clothes/type/:type/activity/:activity', async (req, res) => {
  const clothingType = req.params.type.toLowerCase()
  const activity = req.params.activity.toLowerCase()
  // Connect to MongoDB
  const client = new MongoClient(urlService)

  try {
    await client.connect()

    // Access the MongoDB collection where you stored the clothing data
    const collection = client.db('Wardrobe-Wizard').collection('clothes') // Replace with your collection name.

    // Define the query object based on type and activity
    const query = {}

    if (clothingType !== 'all' && clothingType !== 'null') {
      query.type = clothingType
    }

    if (activity !== 'all' && activity !== 'null') {
      query.event = activity
    }

    // Query for clothing items matching the type and activity
    const matchingClothes = await collection.find(query).sort({ "time": -1 }).toArray()
    res.json({ data: matchingClothes })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  } finally {
    client.close()
  }
})

webapp.get('/outfit/activity/:activity/date/:date', async (req, res) => {
  // Extract year, month, and day from the string
  const year = req.params.date.slice(0, 4);
  const month = req.params.date.slice(4, 6) - 1; // Adjust month (0-11)
  const day = req.params.date.slice(6, 8);
  // Create a new Date object
  const currentDate = new Date(year, month, day);
  const eventType = req.params.activity.toLowerCase();

  const activityData = {
    date: currentDate,
    event: eventType,
    outfits: [],
  };

  // Connect to MongoDB
  const client = new MongoClient(urlService);

  try {
    await client.connect();

    // Access the 'outfits' collection in the database
    const collection = client.db('Wardrobe-Wizard').collection('outfits'); // Replace with your collection name.

    // Insert the new activity data into the 'outfits' collection
    const result = await collection.insertOne(activityData);

    res.json({ message: 'Activity added successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    client.close();
  }
});

webapp.get('/outfit/date/:date', async (req, res) => {
  // Extract year, month, and day from the string
  const year = req.params.date.slice(0, 4);
  const month = req.params.date.slice(4, 6) - 1; // Adjust month (0-11)
  const day = req.params.date.slice(6, 8);
  // Create a new Date object
  const date = new Date(year, month, day);
  // Define the time range for the specified date
  const begin = new Date(date);
  begin.setHours(0, 0, 0, 0); // Start of the specified date
  const end = new Date(date);
  end.setHours(23, 59, 59, 999); // End of the specified date
  console.log('getting outfit on date', begin, end)
  // Connect to MongoDB
  const client = new MongoClient(urlService);

  try {
    await client.connect();

    // Access the 'outfits' collection in the database
    const collection = client.db('Wardrobe-Wizard').collection('outfits'); // Replace with your collection name.

    // Query for outfits for the specified date
    const outfitsForDate = await collection
      .find({
        date: {
          $gte: begin,
          $lt: end,
        },
      })
      .toArray();
    res.json({ data: outfitsForDate });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    client.close();
  }
});

webapp.get('/outfit/delete/:id', async (req, res) => {
  const outfitId = req.params.id;

  // Connect to MongoDB
  const client = new MongoClient(urlService);

  try {
    await client.connect();

    // Access the 'outfits' collection in the database
    const collection = client.db('Wardrobe-Wizard').collection('outfits'); // Replace with your collection name.

    // Delete the outfit by its MongoDB ObjectId
    const result = await collection.deleteOne({ _id: new ObjectId(outfitId) });

    res.json({ message: 'Outfit deleted successfully' });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    client.close();
  }
});

// done
webapp.get('/outfit/addCloth/:id/event/:event/date/:date', async (req, res) => {
  const clothingId = req.params.id;
  let event;
  if (req.params.event === 'null') {
    event = 'causal';
  } else {
    event = req.params.event;
  }
  let date;
  if (req.params.date === 'null') {
    date = new Date()
  }
  else {  // Extract year, month, and day from the string
    const year = req.params.date.slice(0, 4);
    const month = req.params.date.slice(4, 6) - 1; // Adjust month (0-11)
    const day = req.params.date.slice(6, 8);
    // Create a new Date object
    date = new Date(year, month, day);
  }
  // Define the time range for the specified date
  const begin = new Date(date);
  begin.setHours(0, 0, 0, 0); // Start of the specified date
  const end = new Date(date);
  end.setHours(23, 59, 59, 999); // End of the specified date

  // Connect to MongoDB
  const client = new MongoClient(urlService);

  try {
    await client.connect();

    // Access the 'outfits' collection in the database
    const collection = client.db('Wardrobe-Wizard').collection('outfits'); // Replace with your collection name.

    // Find the document with the specified event
    const outfitDocument = await collection.findOne({
      event: event,
      date: { $gte: begin, $lte: end }
    });
    if (outfitDocument) {
      //const string id to mongddb id 
      const clothingIdMogo = new ObjectId(clothingId);
      // Append the clothingId to the 'outfits' array
      outfitDocument.outfits.push(clothingIdMogo);

      // Update the document in the collection
      const result = await collection.updateOne(
        { _id: outfitDocument._id }, // Update based on the retrieved document's _id
        { $set: { outfits: outfitDocument.outfits } }
      );

      if (result.modifiedCount === 1) {
        res.json({ message: 'Clothing item added to the event outfit' });
      } else {
        res.status(500).json({ message: 'Failed to update the outfit' });
      }
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    client.close();
  }
});
;

webapp.get('/clothes/:id', async (req, res) => {
  const clothingId = req.params.id;

  // Connect to MongoDB
  const client = new MongoClient(urlService);

  try {
    await client.connect();

    // Access the 'clothes' collection in the database
    const collection = client.db('Wardrobe-Wizard').collection('clothes'); // Replace with your collection name.

    // Find the clothing item by its id
    const clothingItem = await collection.findOne({ _id: new ObjectId(clothingId) });

    if (clothingItem) {
      res.json({ data: clothingItem });
    } else {
      res.status(404).json({ message: 'Clothing item not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    client.close();
  }
});

// done
webapp.get('/outfits/remove/event/:event/id/:id/date/:date', async (req, res) => {
  let date;
  if (req.params.date === 'null') {
    date = new Date()
  }
  else {  // Extract year, month, and day from the string
    const year = req.params.date.slice(0, 4);
    const month = req.params.date.slice(4, 6) - 1; // Adjust month (0-11)
    const day = req.params.date.slice(6, 8);
    // Create a new Date object
    date = new Date(year, month, day);
  }
  // Define the time range for the specified date
  const begin = new Date(date);
  begin.setHours(0, 0, 0, 0); // Start of the specified date
  const end = new Date(date);
  end.setHours(23, 59, 59, 999); // End of the specified date


  const event = req.params.event;
  const clothingId = req.params.id;
  // Connect to MongoDB
  const client = new MongoClient(urlService);

  try {
    await client.connect();

    // Access the 'outfits' collection in the database
    const collection = client.db('Wardrobe-Wizard').collection('outfits'); // Replace with your collection name.

    // Find the document with the specified event
    const outfitDocument = await collection.findOne({
      event: event,
      date: { $gte: begin, $lte: end }
    });

    if (outfitDocument) {
      // Remove the specified clothingId from the 'outfits' array
      const updatedOutfits = outfitDocument.outfits.filter(id => id.toString() !== clothingId);

      // Update the document in the collection
      const result = await collection.updateOne(
        { _id: outfitDocument._id },
        { $set: { outfits: updatedOutfits } }
      );

      if (result.modifiedCount === 1) {
        res.json({ message: 'Clothing item removed from the event outfit' });
      } else {
        res.status(500).json({ message: 'Failed to update the outfit' });
      }
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    client.close();
  }
});

// done
webapp.get('/outfits/regenerate/event/:event/id/:id/date/:date', async (req, res) => {
  // Extract year, month, and day from the string
  const year = req.params.date.slice(0, 4);
  const month = req.params.date.slice(4, 6) - 1; // Adjust month (0-11)
  const day = req.params.date.slice(6, 8);
  // Create a new Date object
  const date = new Date(year, month, day);
  // Define the time range for the specified date
  const begin = new Date(date);
  begin.setHours(0, 0, 0, 0); // Start of the specified date
  const end = new Date(date);
  end.setHours(23, 59, 59, 999); // End of the specified date

  const event = req.params.event;
  const clothingId = new ObjectId(req.params.id);
  // Connect to MongoDB
  const client = new MongoClient(urlService);

  try {
    await client.connect();

    const outfitsCollection = client.db('Wardrobe-Wizard').collection('outfits');
    const clothesCollection = client.db('Wardrobe-Wizard').collection('clothes');

    // Find the document with the specified event
    const outfitDocument = await outfitsCollection.findOne({
      event: event,
      date: { $gte: begin, $lte: end }
    });
    if (outfitDocument) {
      const clothingToReplace = outfitDocument.outfits.findIndex((element) => element.equals(clothingId));

      if (clothingToReplace !== -1) {
        // Find clothing items of the same event and clothing type
        const clothingItem = await clothesCollection.aggregate([
          { $match: { event: event } },
          { $sample: { size: 1 } }
        ]).toArray();

        if (clothingItem.length === 1) {
          // Replace the clothing item
          outfitDocument.outfits.splice(clothingToReplace, 1, clothingItem[0]._id);

          // Update the document in the collection
          const result = await outfitsCollection.updateOne(
            { _id: outfitDocument._id }, // Update based on the retrieved document's _id
            { $set: { outfits: outfitDocument.outfits } }
          );
          if (result.modifiedCount === 1) {
            res.json({ message: 'Clothing item regenerated successfully', data: outfitDocument.outfits[0] });
          } else {
            res.status(500).json({ message: 'Failed to update the outfit' });
          }
        } else {
          res.status(404).json({ message: 'No matching clothing item found to replace' });
        }
      } else {
        res.status(404).json({ message: 'Clothing item to replace not found in the outfit' });
      }
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    client.close();
  }
});


webapp.get('/getWeather', async (req, res) => {
  try {
    const location = `http://pro.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&appid=${WEATHER_API_KEY}`;
    const result = await axios.get(location);
    res.json({ data: result.data });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

webapp.get('/getWeatherForDate/date/:date', async (req, res) => {
  try {
    const dateCode = req.params.date;
    const location = `https://history.openweathermap.org/data/2.5/history/city?q=Philadelphia&appid=${WEATHER_API_KEY}&units=imperial&dt=${dateCode}`;
    const result = await axios.get(location);
    res.json({ data: result.data });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


const cloudinary = require("cloudinary").v2

const cloudinaryConfig = cloudinary.config({
  cloud_name: "dldiferrn",
  api_key: "554946298277143",
  api_secret: IMAGE_SECRETE,
  secure: true
})

webapp.get("/get-signature", (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000)
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp
    },
    cloudinaryConfig.api_secret
  )
  res.json({ timestamp, signature })
})

webapp.post('/uploadImage', async (req, res) => {
  const client = new MongoClient(urlService);
  try {
    console.log("Already in the backend uploadImage")
    // create the new student
    await client.connect()
    const collection = client.db('Wardrobe-Wizard').collection('clothes')
    // if we passed mongo obj id as req body -> means edit, need to 
    // edit the given object
    // otherwise, create new
    const newImage = {
      image_urls: req.body.imageUrl,
      brand_names: req.body.brand_names,
      descriptions: req.body.descriptions,
      event: req.body.event,
      type: req.body.type,
      time: req.body.time,
    };
    await collection.insertOne(newImage)
    res.json(newImage);
  } catch (err) {
    res.status(409).json({ message: 'there was error' });
  }
})

webapp.get('/clothes/delete/:id', async (req, res) => {
  const mongoId = req.params.id;
  console.log("mongoID is!!!! server",mongoId)

  // Connect to MongoDB
  const client = new MongoClient(urlService);

  try {
    await client.connect();

    const collection = client.db('Wardrobe-Wizard').collection('clothes'); // Replace with your collection name.

    const result = await collection.deleteOne({ _id: new ObjectId(mongoId) });

    res.json({ message: 'Cloth deleted successfully' });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    client.close();
  }
});


webapp.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
