import axios from './axios'
import moment from "moment"

const eventMap = {
  Workout: 'workout',
  'Formal Events': 'formal',
  Meeting: 'meeting',
  Outdoor: 'workout',
  'Night Out': 'night-out',
  Causal: 'causal',
  null: 'null'
}

const typeMap = {
  Top: 'top',
  Bottom: 'bottom',
  'Full Body': 'full-body',
  Shoes: 'shoes',
  Accessories: 'accessories',
  All: 'all',
  null: 'null'
}

export const obj2dbobj = {
  Top: 'top',
  Bottom: 'bottom',
  'Full Body': 'full-body',
  Shoes: 'shoes',
  Accessories: 'accessories',
  All: 'all',
  null: 'null',
  Workout: 'workout',
  'Formal Events': 'formal',
  Meeting: 'meeting',
  Outdoor: 'workout',
  'Night Out': 'night-out',
  Causal: 'causal'
}

export const dbobj2obj = {
  'top': 'Top',
  'bottom': 'Bottom',
  'full-body': 'Full Body',
  'shoes': 'Shoes',
  'accessories': 'Accessories',
  'all': 'All',
  'null': 'null',
  "workout": "Workout",
  "meeting": "Meeting",
  "formal": "Formal Events",
  "night-out": "Night Out",
  "causal": "Causal",
  "null": "null"
}

export const event2dbevent = {
  "workout": "workout",
  "meeting": "meeting",
  "formal events": "formal",
  "formal": "formal",
  "outdoor": "workout",
  "night out": "night-out",
  "causal": "causal",
  'Workout': 'workout',
  'Formal Events': 'formal',
  'Meeting': 'meeting',
  'Outdoor': 'workout',
  'Night Out': 'night-out',
  'Causal': 'causal',
  "null": "null",
  "night-out": "night-out",
}

export const dbevent2event = {
  "workout": "Workout",
  "meeting": "Meeting",
  "formal": "Formal Events",
  "night-out": "Night Out",
  "causal": "Causal",
  "null": "null"
}

export const getClothByTypeEvent = async (type, event) => {
  try {
    // make type and evnnt to lower case
    const response = await axios.get(
      `/clothes/type/${typeMap[type]}/activity/${eventMap[event]}`
    )
    return response.data.data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const getOutfitByDate = async (date) => {
  try {
    const response = await axios.get(
      `/outfit/date/${date}`
    )
    return response.data.data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const addNewActivity = async (activity, date) => {
  try {
    const response = await axios.get(
      `/outfit/activity/${event2dbevent[activity]}/date/${date}`
    )
    return response.data.message
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const deleteActivity = async (id) => {
  try {
    const response = await axios.get(
      `/outfit/delete/${id}`
    )
    return response.data.message
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const addNewCloth = async (id, event, date) => {
  try {
    const response = await axios.get(
      `/outfit/addCloth/${id}/event/${event2dbevent[event] || "null"}/date/${date || "null"}`
    )
    return response.data.message
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const fetchCloth = async (id) => {
  try {
    const response = await axios.get(
      `/clothes/${id}`
    )
    return response.data.data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const removeClothFromOutfit = async (id, event, date) => {
  try {
    const response = await axios.get(
      `/outfits/remove/event/${event}/id/${id}/date/${date || "null"}`
    )
    return response.data.message
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const randomGenerateClothByTypeEvent = async (event, id, selectedDate) => {
  try {
    // make type and evnnt to lower case
    const response = await axios.get(
      `/outfits/regenerate/event/${event2dbevent[event]}/id/${id}/date/${selectedDate}`
    )
    return response.data.data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const getWeatherAPI = async () => {
  try {
    // make type and evnnt to lower case
    const response = await axios.get(
      `/getWeather`
    )
    return response.data.data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
};

export const getWeatherForDateAPI = async (date) => {
  try {
    const response = await axios.get(
      `/getWeatherForDate/date/${date}`
    )
    return response.data.data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
};

export const createImage = async (request) => {
  console.log("CreateImage request", request)
  console.log("CreateImage URL", request.imageUrl)
  console.log("CreateImage brand_names", request.brand_names)
  console.log("CreateImage descriptions", request.descriptions)
  console.log("CreateImage event", request.event)
  console.log("CreateImage type", request.type)
  try {
    // const response = await axios.post(
    //   '/uploadImage',
    //   `imageUrl=${request.imageUrl}&brand_names=${request.brand_names}&descriptions=${request.descriptions}&event=${request.event}&type=${request.type}`,
    // );
    const response = await axios.post(
      '/uploadImage',
      {
        imageUrl: request.imageUrl,
        brand_names: request.brand_names,
        descriptions: request.descriptions,
        event: request.event,
        type: request.type,
        time: request.time,
      },
    );
    return response;
  }
  catch (err) {
    console.log("The creatImage is breaking")
    console.log(err.response.data)
    return err;
  }
};

const api_key = "554946298277143"
const cloud_name = "dldiferrn"
export const uploadPhotoAPI = async (imageFile, clothesType, eventType) => {
  let imageUrl = '';
  const signatureResponse = await axios.get("/get-signature")
  const data = new FormData()
  data.append("file", imageFile)
  data.append("api_key", api_key)
  data.append("signature", signatureResponse.data.signature)
  data.append("timestamp", signatureResponse.data.timestamp)
  const cloudinaryResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, data, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: function (e) {
      console.log(e.loaded / e.total)
    }
  })
  console.log("URL", cloudinaryResponse.data.secure_url)


  imageUrl = cloudinaryResponse.data.secure_url
  let brand_names = "Self-taken"
  let descriptions = "A cloth taken"
  // let event = "causal"
  // let type = "top"
  let event = obj2dbobj[eventType]
  let type = obj2dbobj[clothesType]
  let time = moment().format("MM/DD/YYYY, HH:mm:ss");
  //11/08/2023, 21:03:25
  const dbData = {
    imageUrl,
    brand_names,
    descriptions,
    event,
    type,
    time,
  };
  console.log("dbData printout", dbData)
  console.log("url", dbData.imageUrl)
  createImage(dbData)

};

// export const deleteObject = async (imageFile) => {}