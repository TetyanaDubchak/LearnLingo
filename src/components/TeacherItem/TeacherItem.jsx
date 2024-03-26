

export const TeacherItem = ({item}) => {

    return (
        <>
            <div>
                <img src={item.avatar_url} alt='Teacher' />
            </div>
            <div>
                <div>
                    <p>Languages</p>
                    <ul>
                        <li>Lessons online</li>
                        <li>Lessons done: {item.lessons_done}</li>
                        <li>Rating: { item.rating}</li>
                        <li>Price / 1 hour: {item.price_per_hour}$</li>
                    </ul>
                    <button type='button'>+</button>
                </div>
                <div>
                    <h2>{item.name} {item.surname}</h2>
                    <ul>
                        <li>Speaks: 
                            <ul>
                                {item.languages.map((language, index) => (
                                    <li key={index}>
                                        {language}
                                        {index < item.languages.length - 1 && ','}
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>Lesson Info: { item.lesson_info}</li>
                        <li>Conditions: 
                            <ul>
                                {item.conditions.map((condition,index) => (
                                    <li key={index}>
                                        {condition}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <button type="button">Read more</button>
                    <ul>
                        {item.levels.map((lev,index) => (<li key={index}># {lev}</li>))}
                    </ul>
                </div>
            </div>
        </>
    )
}