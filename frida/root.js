Java.perform(function(){
    console.log("\nRoot detection bypass");
    var obj = Java.use("com.android.insecurebankv2.PostLogin");
    obj.doesSUexist.implementation = function(){
        console.log("triggered!");
        return true;
    };
});