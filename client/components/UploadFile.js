import { useEffect } from "react";
import useRequest from "../hooks/use-request";
import axios from "axios";

const UploadFile = ({
    file
}) => {
    // const { doRequest, errors } = useRequest({
    //     url: '/api/uploads',
    //     method: 'post',
    //     body: {
    //         fileName,
    //         destination 
    //     },
    //     onSuccess: (data) => {
    //       console.log('data', data)
    //       // Router.push('/')
    //     }
    //   });
    
      useEffect(() => {
        if (file){
            uploadFile()
        }
        // await doRequest();
      

      }, [file])
      
    const uploadFile = async () =>  {
        console.log(file)
        const response = await axios.post('/api/uploads', file);
        console.log(response)
        return null
    }
    return null
}

export default UploadFile