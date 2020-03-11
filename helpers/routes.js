const mongoClient = require('mongodb').MongoClient
const client = new mongoClient(process.env.MNG_URI, { 
	useNewUrlParser: true,
	useUnifiedTopology:true 
})

async function search({client,collectionName = 'test',valueObj = {}}){
	try{
		await client.connect()
		console.log('Hello MongoDB...')

		const db = client.db()
		const collection = db.collection(collectionName)

		return await collection.find(valueObj).toArray()
	
	}catch(e){
		console.error(e,'error');
	}finally{
		// await client.close()
		// console.log('Cya MongoDB...')
	}	
}

function overview(req,res){
	res.render('pages/overview',{})
	
}

function login(req,res){
	res.render('pages/login',{})
}

module.exports = {
	overview,
	login
}