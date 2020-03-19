import React from 'react';
import _ from 'lodash';
import {Table} from 'react-bootstrap';

const badMarks = ['Неудовлетворительно', 'Неявка'];

class JournalTable extends React.Component {
    render() {
        return (
            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ФИО</th>
                        <th>Тип</th>
                        <th>ПрИС</th>
                        <th>Пересдачи ПрИС</th>
                        <th>Тип</th>
                        <th>СИИ</th>
                        <th>Пересдачи СИИ</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.students.map((student, idx) => {
                    const {
                        name,
                        prisMark,
                        siiMark,
                        siiAttempts,
                        prisAttempts
                    } = student;

                    return (
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{name}</td>
                            <td>Экзамен</td>
                            <td
                                className={_.includes(badMarks, prisMark) ? 'bad-mark' : ''}
                            >
                                {prisMark}
                            </td>
                            <td>{prisAttempts}</td>
                            <td>Экзамен</td>
                            <td
                                className={_.includes(badMarks, siiMark) ? 'bad-mark' : ''}
                            >
                                {siiMark}
                            </td>
                            <td>{siiAttempts}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        );
    }
}

export default JournalTable;
