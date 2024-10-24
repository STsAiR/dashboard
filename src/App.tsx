// import Alert from "./components/Alert";
import Button from "./components/Button";
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
            {/* <Alert>
                <h1>World</h1>
            </Alert> */}
            <Button text="Click me!" />
            <Button text="Click me!" />
            <Button text="Click me!" />
            <Button text="Click me!" />
            <Button text="Click me!" />
            <Button text="Click me!" />
            <Button text="Click me!" />
        </div>
    );
}

export default App;
