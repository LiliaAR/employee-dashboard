interface EmployeeCardProps {
  name: string;
  department: string;
  status: string;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, 
department, status }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{department}</p>
      <span>{status}</span>
    </div>
  );
}
// Nov 12
