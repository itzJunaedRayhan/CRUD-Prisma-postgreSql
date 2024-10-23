import app from "./app";


const PORT = process.env.PORT || 3003;
async function Bootstrap () {
    app.listen(PORT, () => {
        try {
            console.log(`App listening on ${PORT}`);
        } catch (err) {
            console.log(err);
        }
    });
}
Bootstrap();