import {ajax} from "rxjs/ajax";
import {map} from "rxjs/operators";

const Request = {
    getStudents() {
        return ajax('http://localhost:8080/journal')
            .pipe(
                map((data) => data.response)
            )
    }
};

export default Request
