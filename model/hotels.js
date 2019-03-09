var db = require('./db');

module.exports={

	get: function(userId, callback){
		var sql = "select * from user where id=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},
	getUsernames: function(callback){
		var sql = "select username from users where deletedAt is null";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	getTours: function(callback){
		var sql = "SELECT COUNT(*) as count FROM tours WHERE deletedAt is NULL";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	getAll: function(callback){
		var sql = "select * from users";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	validate: function(user, callback){
		var sql = "select * from user where username=? and password=?";

		db.getResult(sql, [user.uname, user.password], function(result){
			callback(result);
		});
	},
	insert: function(user, callback){
		var sql = "insert into hotels (title, addedBy, location, image, hotel_desc, owner, last_modified) values (?, ?, ?, ?, ?, ?, ?)";
		db.execute(sql, [user.hotel_title, user.addedBy, user.hotel_location, user.image, user.hotel_desc, user.hotel_owner, user.last_modified], function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql = "update user set username=?,password=?, type=? where id=?";
		db.execute(sql, [user.uname, user.password,user.type, user.id], function(status){
			callback(status);
		});
	},
	delete: function(userId, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	}
}



