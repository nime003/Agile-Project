import {Link} from "react-router-dom";

export function  TeacherPage(){
    return (
        <div>
            <h1>Hello Teacher</h1>
            <Link to={"/teacher/grouping/"}>Grouping</Link>
        </div>
    );
}