/*import React from 'react'
import config from '../config.json'

export default class MsgTest extends React.Component{

    
    render(){
        const [response, setResponse] = useState("");

        useEffect(() => {
          const socket = socketIOClient(config.server);
          socket.on("FromAPI", data => {
            setResponse(data);
          });
        }, []);
        return (
            <p>Ola {response}</p>
        )
    }
}*/