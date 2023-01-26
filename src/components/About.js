import{Outlet} from "react-router-dom";
import ProfileClass from './ProfileClass';
import ProfileFunctionalComponent from './Profile';

const About = () => {
    return (
        <div>
            <h1> About Us Page</h1>
            <p>
                This is the Namaste React Live Course Chapter 07 - Finding the Path
            </p>
            {/* <Outlet /> */}
            <ProfileClass />
            <ProfileFunctionalComponent name={"Akshay"}/>
        </div>
    );
};
export default About;