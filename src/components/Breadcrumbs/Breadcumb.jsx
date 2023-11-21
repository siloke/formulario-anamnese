
import {Breadcrumb} from "react-bootstrap";
import {StyledBreadcumb} from "./StyledBreadcumb.jsx";
export const Breadcumb = () => {
    return (
        <StyledBreadcumb>
            <Breadcrumb>
                <Breadcrumb.Item href="#" className="b-item">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#" className="b-item" active> Formulário</Breadcrumb.Item>
            </Breadcrumb>
        </StyledBreadcumb>
    );
}