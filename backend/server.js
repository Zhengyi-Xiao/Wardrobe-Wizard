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

webapp.get('/todays-outfit', async (req, res) => {
  // Connect to MongoDB
  const client = new MongoClient(urlService)

  try {
    await client.connect()
    const collection = client.db('Wardrobe-Wizard').collection('todays-outfit')

    // Query for all today's outfits
    const allOutfits = await collection.find({}).toArray()

    if (allOutfits.length > 0) {
      res.json(allOutfits)
    } else {
      res.status(404).json({ message: 'No outfits found for today.' })
    }
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  } finally {
    client.close()
  }
})

webapp.get('/todays-outfit/:event', async (req, res) => {
  const event = req.params.event.toLowerCase()

  // Connect to MongoDB
  const client = new MongoClient(urlService)

  try {
    await client.connect()
    const collection = client.db('Wardrobe-Wizard').collection('todays-outfit')

    // Query for outfit items with the specified event tag
    const outfitForEvent = await collection.find({ event: event }).toArray()

    if (outfitForEvent.length > 0) {
      res.json(outfitForEvent)
    } else {
      res.status(404).json({ message: 'No outfit found for this event.' })
    }
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  } finally {
    client.close()
  }
})

webapp.get('/generate/clothes/:type', async (req, res) => {
  const clothingType = req.params.type.toLowerCase()

  // Connect to MongoDB
  const client = new MongoClient(urlService)

  try {
    await client.connect()

    // Access the MongoDB collection where you stored the clothing data
    const collection = client.db('Wardrobe-Wizard').collection('clothes') // Replace with your collection name.

    // Query for a random clothing item of the specified type
    const randomClothingItem = await collection
      .aggregate([{ $match: { type: clothingType } }, { $sample: { size: 1 } }])
      .toArray()

    if (randomClothingItem.length > 0) {
      res.json(randomClothingItem[0])
    } else {
      res.status(404).json({ message: 'No matching clothing items found.' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  } finally {
    client.close()
  }
})

webapp.get('/generate/todays-outfit/:event', async (req, res) => {
  const clothingEvent = req.params.event.toLowerCase()

  const generalClothingTypes = {
    top: ['beachwear', 'knit', 'skirt', 'top', 'tailoring'],
    coat: ['jacket', 'coat'],
    bottom: ['pant', 'dress', 'short', 'legging', 'jean'],
    shoes: ['boot', 'pump'],
    accessory: ['accessory']
  }

  const todaysOutfit = []

  // Sample items from each category
  for (const category in generalClothingTypes) {
    if (
      (category === 'outcloth' && Math.random() < 0.5) ||
      category !== 'outcloth'
    ) {
      const subcategories = generalClothingTypes[category]
      const randomSubcategory =
        subcategories[Math.floor(Math.random() * subcategories.length)]
      todaysOutfit.push(randomSubcategory)
    }
  }

  // Connect to MongoDB and retrieve data for each category
  const client = new MongoClient(urlService)

  try {
    await client.connect()
    const collection = client.db('Wardrobe-Wizard').collection('clothes')

    const outfitDetails = await Promise.all(
      todaysOutfit.map(async category => {
        const randomClothingItem = await collection
          .aggregate([{ $match: { type: category } }, { $sample: { size: 1 } }])
          .toArray()

        if (randomClothingItem.length > 0) {
          return randomClothingItem[0]
        } else {
          return null
        }
      })
    )

    // Add event tag to each outfit item
    const outfitWithEventTag = outfitDetails.map(outfitItem => {
      if (outfitItem) {
        outfitItem.event = clothingEvent
      }
      return outfitItem
    })

    // Store the outfit in the 'todays-outfit' collection
    const todaysOutfitCollection = client
      .db('Wardrobe-Wizard')
      .collection('todays-outfit')
    await todaysOutfitCollection.insertMany(outfitWithEventTag)

    res.json(outfitWithEventTag)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  } finally {
    client.close()
  }
})


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

// how to correctly use mongodbAPI
// the postID, how to correct it
// 前端有image id； 把前端的id发到后端 后端第一步是s3 filename; 知道了filename 所以知道了url的地址; 把地址发到mongodb上去
// webapp.post('/uploadImage',async (req,res)=>{
  
// })

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
    // const newImage = {
    //   imageUrl : "fdas",
    //   brand_names: "fda",
    //   descriptions: "fda",
    //   event: "fda",
    //   type: "fda",
    // };
    await collection.insertOne(newImage)
    res.json(newImage);
  } catch (err) {
    res.status(409).json({ message: 'there was error' });
  }
})

webapp.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
