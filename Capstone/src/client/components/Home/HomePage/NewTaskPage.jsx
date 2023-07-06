import Header from "../Header/Header";
import { NewTaskCard } from "../../Task/NewTask";
import './Home.css'

const NewTaskPage = () => {
    return (
        <div className="HomePage">
            <Header />
            <NewTaskCard />
        </div>
    );
}
 
export default NewTaskPage;