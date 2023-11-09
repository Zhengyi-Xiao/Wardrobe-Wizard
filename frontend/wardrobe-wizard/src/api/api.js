import axios from './axios'

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

export const addNewActivity = async (activity) => {
  try {
    const response = await axios.get(
      `/outfit/activity/${activity}`
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

export const addNewCloth = async (id, event) => {
  try {
    const response = await axios.get(
      `/outfit/addCloth/${id}/event/${event}`
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

export const removeClothFromOutfit = async (id, event) => {
  try {
    const response = await axios.get(
      `/outfits/remove/event/${event}/id/${id}`
    )
    return response.data.message
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const randomGenerateClothByTypeEvent = async (event, id) => {
  try {
    // make type and evnnt to lower case
    const response = await axios.get(
      `/outfits/regenerate/event/${event}/id/${id}`
    )
    return response.data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
