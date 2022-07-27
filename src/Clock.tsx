import { useEffect, useState } from "react"

export default function Clock () {

    const [time, setTime] = useState<Date>()

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    })

    return <div>
        {/*este ponto de interrogação é para que pare de dar erro no typescript pelo fato de não termos inicializado a variável time*/}
        agora: {time?.toLocaleTimeString()}
    </div>
}