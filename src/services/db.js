import { openDB } from 'idb'

const DB_NAME = 'my-bike-track-db'
const DB_VERSION = 1

async function getDB(){
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db){
      if(!db.objectStoreNames.contains('fuel')) db.createObjectStore('fuel', { keyPath: 'id', autoIncrement: true })
      if(!db.objectStoreNames.contains('service')) db.createObjectStore('service', { keyPath: 'id', autoIncrement: true })
      if(!db.objectStoreNames.contains('spares')) db.createObjectStore('spares', { keyPath: 'id', autoIncrement: true })
      if(!db.objectStoreNames.contains('trips')) db.createObjectStore('trips', { keyPath: 'id', autoIncrement: true })
      if(!db.objectStoreNames.contains('meta')) db.createObjectStore('meta', { keyPath: 'key' })
    }
  })
}

export async function addFuel(entry){
  const db = await getDB()
  return db.add('fuel', entry)
}

export async function getAllFuel(){
  const db = await getDB()
  return db.getAll('fuel')
}

export async function clearAll(){
  const db = await getDB()
  await Promise.all([
    db.clear('fuel'),
    db.clear('service'),
    db.clear('spares'),
    db.clear('trips'),
    db.clear('meta')
  ])
}

export async function exportData(){
  const db = await getDB()
  const fuel = await db.getAll('fuel')
  const service = await db.getAll('service')
  const spares = await db.getAll('spares')
  const trips = await db.getAll('trips')
  const meta = await db.getAll('meta')
  return { fuel, service, spares, trips, meta }
}

export async function importData(data){
  const db = await getDB()
  if(data.fuel) for(const item of data.fuel) await db.add('fuel', item)
  if(data.service) for(const item of data.service) await db.add('service', item)
  if(data.spares) for(const item of data.spares) await db.add('spares', item)
  if(data.trips) for(const item of data.trips) await db.add('trips', item)
  if(data.meta) for(const item of data.meta) await db.put('meta', item)
}
