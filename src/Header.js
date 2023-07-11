export default function Header({ className }) {
  let title = "";

  if (className === "directory") {
    title = "Employee Directory";
  } else if (className === "employee") {
    title = "Employee";
  }
  return (
    <h1
      style={{
        textAlign: "center",
      }}
      >{title}
    </h1>
  );
}
