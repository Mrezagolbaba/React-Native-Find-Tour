import axios from "axios";

export const fetchTours = async (lat,lng)=>{
    const apiUrl = `https://staging.tourmega.com/api/v2/tours?lat=${lat}&lng=${lng}&radius=3&count=100&categories[]=1`
       let result;
        try {
           const response = await axios.request({
                method: 'GET',
                url: apiUrl
            })
             result = response?.data?.data

        } catch (e) {
          console.log(e)
        }
        return result
}
export const fetchSearch = async (search)=>{
    const apiUrl= `https://services.gisgraphy.com/fulltext/fulltextsearch?q=${search}&format=json`
    let result;
    try {
        const response = await axios.request({
            method: 'GET',
            url: apiUrl
        })
        result =response.data.response.docs

    } catch (e) {
        console.log(e)
    }
    return result
}
