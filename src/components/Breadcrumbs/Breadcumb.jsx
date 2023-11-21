
import {Breadcrumb} from "react-bootstrap";
import {StyledBreadcumb} from "./StyledBreadcumb.jsx";
export const Breadcumb = () => {
    return (
        <StyledBreadcumb>
            <Breadcrumb className="b">
                <Breadcrumb.Item href="#" className="b-item" active>Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#" className="b-item" active> Formulário</Breadcrumb.Item>
            </Breadcrumb>
        </StyledBreadcumb>
    );
}