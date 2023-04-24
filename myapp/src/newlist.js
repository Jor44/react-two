import { useEffect, useState } from "react";

export const MyNewList = () => {
    const [name, setName] = useState([])

    useEffect(() => {
        setName([{ title: 'saffsasfa' }, { title: 'safa' }, { title: 'saffsas' }])
    },
        [])


    return (
        <div>
            {
                name.map((i, j) => {
                    return (
                        <div key={j}>{i.title}</div>
                    )
                }
                )

            }
            
        </div>
    )
}
