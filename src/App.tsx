import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";

function App() {
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
                {/* Hello */}
                <h1>World</h1>
            </Alert>
        </div>
    );
}

export default App;
