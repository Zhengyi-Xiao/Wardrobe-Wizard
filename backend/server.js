const express = require('express')
const cors = require('cors')
const { urlService, DATA_PATH } = require('./secrete')
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
    const allClothingItems = await collection.find({}).toArray()

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
    const matchingClothes = await collection.find(query).toArray()
    res.json({ data: matchingClothes })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  } finally {
    client.close()
  }
})

webapp.get('/outfit/activity/:activity', async (req, res) => {
  const currentDate = new Date();
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
  const dateString = req.params.date;
  const date = new Date(
    `${dateString.substr(0, 4)}-${dateString.substr(4, 2)}-${dateString.substr(6, 2)}`
  );
  console.log(date)
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
          $gte: date,
          $lt: new Date(date.getTime() + 36 * 60 * 60 * 1000), // End of the specified date
        },
      })
      .toArray();

    if (outfitsForDate.length > 0) {
      res.json({ data: outfitsForDate });
    } else {
      res.status(404).json({ message: 'No outfits found for the specified date.' });
    }
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

webapp.get('/outfit/addCloth/:id/event/:event', async (req, res) => {
  const clothingId = req.params.id;
  const event = req.params.event;

  // Connect to MongoDB
  const client = new MongoClient(urlService);

  try {
    await client.connect();

    // Access the 'outfits' collection in the database
    const collection = client.db('Wardrobe-Wizard').collection('outfits'); // Replace with your collection name.

    // Find the document with the specified event
    const outfitDocument = await collection.findOne({ event: event });

    if (outfitDocument) {
      // Append the clothingId to the 'outfits' array
      outfitDocument.outfits.push(clothingId);

      // Update the document in the collection
      const result = await collection.updateOne(
        { event: event },
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

webapp.get('/outfits/remove/event/:event/id/:id', async (req, res) => {
  const event = req.params.event;
  const clothingId = req.params.id;

  // Connect to MongoDB
  const client = new MongoClient(urlService);

  try {
    await client.connect();

    // Access the 'outfits' collection in the database
    const collection = client.db('Wardrobe-Wizard').collection('outfits'); // Replace with your collection name.

    // Find the document with the specified event
    const outfitDocument = await collection.findOne({ event: event });

    if (outfitDocument) {
      // Remove the specified clothingId from the 'outfits' array
      const updatedOutfits = outfitDocument.outfits.filter(id => id !== clothingId);

      // Update the document in the collection
      const result = await collection.updateOne(
        { event: event },
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


webapp.get('/outfits/regenerate/event/:event/id/:id', async (req, res) => {
  const event = req.params.event;
  const clothingId = req.params.id;

  // Connect to MongoDB
  const client = new MongoClient(urlService);

  try {
    await client.connect();

    // Access the 'outfits' and 'clothes' collections in the database
    const outfitsCollection = client.db('Wardrobe-Wizard').collection('outfits'); // Replace with your collection name.
    const clothesCollection = client.db('Wardrobe-Wizard').collection('clothes'); // Replace with your collection name.

    // Find the document with the specified event
    const outfitDocument = await outfitsCollection.findOne({ event: event });

    if (outfitDocument) {
      // Find the clothing item to replace
      const clothingToReplace = outfitDocument.outfits.indexOf(clothingId);

      if (clothingToReplace !== -1) {
        // Find clothing items of the same event and clothing type
        const clothingItem = await clothesCollection.aggregate([
          { $match: { type: outfitDocument.type, event: event } },
          { $sample: { size: 1 } }
        ]).toArray();
        console.log(clothingItem);
        if (clothingItem.length === 1) {
          // Replace the clothing item
          outfitDocument.outfits.splice(clothingToReplace, 1, clothingItem[0]._id);

          // Update the document in the collection
          const result = await outfitsCollection.updateOne(
            { event: event },
            { $set: { outfits: outfitDocument.outfits } }
          );

          if (result.modifiedCount === 1) {
            res.json({ message: 'Clothing item regenerated successfully' });
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
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    client.close();
  }
});

const cloudinary = require("cloudinary").v2

const cloudinaryConfig = cloudinary.config({
  cloud_name: "dldiferrn",
  api_key: "554946298277143",
  api_secret: "4XcD9tilQTTVe-Vc8a1vKS8HwnE",
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
    const newImage = {
      imageUrl : req.body.imageUrl,
      brand_names: req.body.brand_names,
      descriptions: req.body.descriptions,
      event: req.body.event,
      type: req.body.type,
    };
    await collection.insertOne(newImage)
    res.json(newImage);
  } catch (err) {
    res.status(409).json({ message: 'there was error' });
  }
})


webapp.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
