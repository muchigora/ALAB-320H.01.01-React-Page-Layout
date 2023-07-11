export default function EmployeeListItem({ image, name, title }) {
  return (
    <div
      className="list-item"
      style={{
        display: "flex",
        flexDirection: "row",
        background: '#f5f5f5',
        border: "2px solid",
        padding: '0 3.5rem 0 1.5rem',
        margin: "0 5% 1%",
        height: "15%"
      }}
    >
      <img src={image} alt="Profile" className="profile-picture" style={{
        borderRadius: "100%",
        width: "25%",
        margin: "5%"
      }}/>
      <div className="details" style={{
        width: "75%",
        margin: "auto"
      }}>
        <h3 className="name">{name}</h3>
        <p className="title">{title}</p>
      </div>
    </div>
  );
}

