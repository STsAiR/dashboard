import { ReactNode, useState } from "react";
import Button from "./Button";
import TimeDiff from "./TimeDiff";

interface props {
    children?: ReactNode;
}

const Alert = ({ children }: props) => {
    const [show, setShow] = useState(false);

    if (show) {
        return (
            <div className="alert alert-danger">
                {children}
                <Button color="danger" onClick={() => setShow(false)}>
                    Hide Alert
                </Button>
                <TimeDiff />
            </div>
        );
    } else {
        return (
            <Button color="danger" onClick={() => setShow(true)}>
                Show Alert
            </Button>
        );
    }

    return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
