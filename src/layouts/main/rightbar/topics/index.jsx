import { topics } from "~/utils/consts";
import Topic from "./topic";
import RightbarSection from "~/components/rightbar-section";

export default function Topics() {
    return (
        <RightbarSection 
            title="İlgini çekebilecek gündemler"
            more="/trends"
        >
            {topics.map((topic, index) => <Topic item={topic} key={index} />)}
        </RightbarSection> 
    )
}
