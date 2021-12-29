export function Table(props) {
    return (
    <div className="overflow-x-auto">
    <table className="table w-full">
      <thead>
            {props.headers}
      </thead> 
      <tbody>
            {props.children}
      </tbody>
    </table>
  </div>)
}