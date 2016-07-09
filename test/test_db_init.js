var db_handler = require("db/index.js");

describe('db_handler',function(){
	describe('new db_handler',function(){
		it('should initialize the database with default db configuration', function() {
			var url = 'mongodb://localhost:27017/memory';
			var options = {w:0};
			var collection = 'memoryLog';
			var memoryLogger = MemoryLogger();
			expect(memoryLogger._db).toEqual(mongo.db(url, options).collection(collection));
		});
	});
});
