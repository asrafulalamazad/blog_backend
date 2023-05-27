const app=require("./app");

app.listen(process.env.port||8000,function () {
    console.log("App Run @8000")
});