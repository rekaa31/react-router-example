import {
    useParams,
  } from "react-router-dom";

export default function AboutmeDetailPage() {
    
    let { topicId } = useParams();
    
    return(
        <div>
            <h3>{topicId}</h3>
        </div>
    )

}