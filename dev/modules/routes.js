function overview(req,res){
	res.render('pages/overview',{})
	
}

function login(req,res){
	res.render('pages/login',{})
}

function register(req,res){
	res.render('pages/register',{})
}

module.exports = {
	overview,
	login,
	register
}