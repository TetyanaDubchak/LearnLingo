import { useEffect, useState } from "react";

import { getTeachersList } from "../../API";
import { TeacherItem } from "components/TeacherItem/TeacherItem";

export const TeachersList = () => {
    const [teachersList, setTeachersList] = useState([]);

    useEffect(() => {
        const addList = async () => {
            try {
                const teachers = await getTeachersList();
                setTeachersList(teachers);
            } catch (error) {
                console.log('something wrong');
            }
        }
        addList();
    }, []);
    console.log(teachersList);
    return (
        <ul>
            {teachersList.map((item, index) => (
                <li key={index}>
                    <TeacherItem item={ item} />
                </li>
            ))}
    
        </ul>
    )
}