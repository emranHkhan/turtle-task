import axios from 'axios'
import { useEffect, useState } from 'react';


const accessToken = 'd7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3'
const apiUrl = 'https://gorest.co.in/public/v1/users'

axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer${accessToken}`
        return config
    },
    error => {
        return Promise.reject(error)
    }
);


const FetchData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(apiUrl)
            .then(res => {
                setData(res.data.data)
            })
    }, [])

    return (
        <div>
            {
                data.map(item => {
                    return <pre style={{ marginBottom: '10px', color: 'white' }} key={item.email}>
                        name: {item.name},
                        email: {item.email},
                        gender: {item.gender}
                    </pre>
                })
            }
        </div>
    )
}

export default FetchData