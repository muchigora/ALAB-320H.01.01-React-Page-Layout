import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";


export default function Homepage({className}) {
    
    let employees = [
        {
            image: "james.jpeg",
            name: "James King",
            title: "President and CEO"
        },
        {
            image: "julie.jpeg",
            name: "Julie Taylor",
            title: "VP of Marketing"
        },
        {
            image: "eugene.jpeg",
            name: "Eugene Lee",
            title: "CFO"
        },
        {
            image: "john.jpeg",
            name: "John Williams",
            title: "VP of Engineering"
        },
        {
            image: "ray.jpeg",
            name: "Ray Moore",
            title: "VP of Sales"
        },
        {
            image: "paul.jpeg",
            name: "Paul Jones",
            title: "QA Manager"
        }
      ]
    if (className === "directory") {
        return (
            <>
                <Header className="directory" />
                <SearchBar />
                <EmployeeList list={employees}/>
            </>
        )
    } else if (className === "employee") {
        return (
            <Header className="employee" />
        )
    }
}