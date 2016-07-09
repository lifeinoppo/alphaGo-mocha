var music = require("../index.js");

describe('music',function(){
	describe('new music',function()
		it('should create an instance of music',function(){
			var music = Music();
			expect(music instanceof Music).toBeTruthy();	
		});	
		it('should initialize Music with default array',function(){
			var music = Music();
			expect(music.singers).toEqual([]);
		});
	});
	describe('music.handle(url)', function() {
		it('should start handle the url contains music pieces ', function(done) {
			var music = Music();
			music.handle(url);
			/*
			memoryLogger._db.count({}, function(error, count) {
				expect(count).not.toEqual(0);
				done();
			});
			*/
		});
	});
	
});
