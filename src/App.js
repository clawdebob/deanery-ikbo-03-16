import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import _ from 'lodash';
import JournalTable from "./components/JournalTable/JournalTable";
import Request from "./services/Request";
import './App.css';
import {Button} from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.studentMap = null;
        this.buttonsList = null;
        this.state = {
          students: []
        };
    }
    componentDidMount() {
        Request.getStudents().subscribe((students) => {
            this.studentMap = _.chain(students)
                .groupBy('studyGroup')
                .map(val => val)
                .value();

            this.buttonsList = _.map(this.studentMap, (val, idx) =>
                (<Button
                    onClick={() => {this.setState({students: this.studentMap[idx]})}}
                    key={idx}
                >
                    {`Группа ${idx + 1}`}
                </Button>)
            );

            this.setState({
                students: this.studentMap[0]
            });
        });
    }

    render() {
        return (
            <div className="App">
                <div className="buttons__container">
                    {this.buttonsList}
                </div>
                <JournalTable
                    students={this.state.students}
                />
            </div>
        );
    }
}

export default App;
