/**
 * ActualitesController
 *
 * @description :: Server-side logic for managing actualites
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var t = "coucou";

module.exports = {


	listActualites : function(	req,res){
	    socket.emit('news', "tata");
		console.log(t);
	}
};
