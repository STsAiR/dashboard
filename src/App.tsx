import Alert from "./components/Alert";
import CurrentTime from "./components/CurrentTime";
// import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

function App() {
    // set background as black
    document.body.style.backgroundColor = "grey";
    // let items = ["apple", "banana", "cherry", "date", "elderberry"];
    // const handleSelectItem = (item: string) => console.log(item);

    // text is a html content
    // const text = "<h1>This is an alert!</h1>";

    // const text = "This is an alert!";
    return (
        <div>
            {/* <ListGroup
                items={items}
                heading="Fruits"
                onSelectItem={handleSelectItem}
            /> */}
            <Alert>
                <h1>唔好Emo啦！</h1>
            </Alert>
            {/* <Button color="warning" onClick={() => console.log("clicked")}>
                Button
            </Button> */}
            <CurrentTime />
        </div>
    );
}

export default App;
