import EmployeeListItem from "./EmployeeListItem"

export default function EmployeeList({list}) {
    return (
        <div className="list">
        {list.map((item, index) => (
            <EmployeeListItem
            key={index}
            image={item.image}
            name={item.name}
            title={item.title}
            />
        ))}
        </div>
    )
}