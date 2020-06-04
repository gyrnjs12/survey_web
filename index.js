var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var db = mongoose.connection;

// mongoDB 기본 설정 4개 꼭 해야함
mongoose.set('useNewUrlParser', true);   
mongoose.set('useFindAndModify', false); 
mongoose.set('useCreateIndex', true);    
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://ypper7340:tjsdlswkd12@cluster0-nlcl9.mongodb.net/test?retryWrites=true&w=majority'); // connect string으로 mongoDB랑 node 연결

app.use(bodyParser.json()); // json형식의 데이터를 받는다
app.use(bodyParser.urlencoded({extended:true})); // form으로 받은 데이터가 req.body에 생성됨

db.once('open', function(){
  console.log('DB connected');
}); // db 연결 성공시
db.on('error', function(err){
  console.log('DB ERROR : ', err);
}); // db연결 실패시

app.set('view engine','ejs'); 
app.set('views', './views')
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send('Hello World');
  });

app.listen(3000, function(){ 
  console.log('server on!'); 
});