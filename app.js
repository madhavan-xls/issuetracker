const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';  // Connect to Docker's MongoDB

const client = new MongoClient(uri);  // No need for useNewUrlParser and useUnifiedTopology anymore

async function main() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const database = client.db('issuetrackerdb');  // Use your DB name
    const collection = database.collection('issues');
    
    // Example query to fetch all issues
    const issues = await collection.find().toArray();
    console.log(issues);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
  }
}

main();

